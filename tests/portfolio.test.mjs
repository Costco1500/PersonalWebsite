import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync, existsSync } from 'node:fs';
import { barbellWeight, changePlatePairs, rallyFlight } from '../lib/sports.ts';
import { barbellConfig, interests } from '../data/interests.ts';
import { projects, posters, publications, researchExperiences, earlierExperiences } from '../data/portfolio.ts';

test('matching plates produce the correct total at every supported load', () => {
  assert.deepEqual(Array.from({length:5},(_,pairs) => barbellWeight(pairs,barbellConfig)), [20,40,60,80,100]);
  assert.equal(changePlatePairs(0,-1,4),0);
  assert.equal(changePlatePairs(4,1,4),4);
  assert.equal(changePlatePairs(2,-1,4),1);
});

test('successive hits reverse direction and follow a symmetric arc', () => {
  for(let hits=1; hits<=20; hits++) {
    const flight = rallyFlight(hits);
    assert.equal(flight.endX,rallyFlight(hits+1).startX);
    assert.equal(flight.arc[0],177);
    assert.equal(flight.arc.at(-1),177);
    assert.equal(flight.arc[4],38);
    assert.deepEqual(flight.arc,[...flight.arc].reverse());
  }
});

test('every data-derived project filter has a matching project', () => {
  for(const category of new Set(projects.map(p => p.category))) {
    assert.ok(projects.filter(p => p.category === category).length > 0);
  }
  assert.equal(projects.length,3);
});

test('interest copy supports editable details and goals without personal stats', () => {
  for(const item of Object.values(interests)) {
    assert.equal(typeof item.summary,'string');
    assert.ok(Array.isArray(item.details));
    assert.ok(Array.isArray(item.goals));
    assert.ok([...item.details,...item.goals].every(entry => typeof entry === 'string'));
  }
});

test('research images still exist and experience poster references resolve', () => {
  for(const poster of posters) {
    assert.ok(existsSync(`public${poster.image}`));
    assert.ok(existsSync(`public${poster.pdf}`));
    assert.equal(readFileSync(`public${poster.pdf}`).subarray(0,5).toString(),'%PDF-');
    assert.ok(Math.max(poster.width,poster.height) >= 2000);
  }
  for(const item of [...researchExperiences,...earlierExperiences]) {
    if(item.posterId) assert.ok(posters.some(p => p.id === item.posterId));
  }
});

test('production HTML retains navigation targets, project links, and papers', () => {
  const html = readFileSync('.next/server/app/index.html','utf8');
  for(const id of ['top','about','research','experience','publications','projects','interests','tennis','lifting','contact']) {
    assert.ok(html.includes(`id="${id}"`), `Missing section ${id}`);
  }
  for(const link of [...projects.flatMap(p => p.links),...publications]) {
    assert.ok(html.includes(`href="${link.href}"`),`Missing link ${link.href}`);
  }
  for(const label of ['Start rally','Hit ball','Reset rally','Add pair','Remove pair']) assert.ok(html.includes(label));
  assert.ok(html.includes('Filter projects'));
  assert.ok(html.includes('Explore the court'));
  for(const poster of posters) assert.ok(html.includes(`href="${poster.pdf}"`));
  assert.ok(html.includes('Preprint · Not peer reviewed'));
  assert.ok(html.includes('14 September 2026'));
  assert.ok(html.includes('Read preprint'));
  assert.ok(!html.includes('lake-munson-lstm-pinn.png'));
});

test('new Lake Munson poster and preprint are described as distinct studies', () => {
  assert.ok(posters.find(p => p.id === 'lake-munson').title.includes('Gradient Boosting Regression'));
  const preprint = publications.find(p => p.preprint);
  assert.equal(preprint.href,'https://www.preprints.org/manuscript/202609.1068/v1');
  assert.equal(preprint.authors,'Alexander Wang and Ming Ye');
  assert.ok(preprint.title.includes('Lakes of Leon County'));
});
