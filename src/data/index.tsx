import React from 'react';
import Greeter from '../views/Greeter';
import Diploma from '../views/Diploma';
import { PageLink, TabLink } from '../models';
import { red, cyan, green, midBlue } from '../theme/colors';

import staticData from './json/static.json';
import contactData from './json/contact.json';
import sweData from './json/dsm.json';
import pkg from '../../package.json';

import { calculateDiplomaProgress } from '../utils';

export const pages: PageLink[] = [
  {
    name: 'Home',
    url: '/',
    icon: 'home',
    isInternal: true,
    comp: () => (
      <Greeter
        staticData={staticData}
        contactData={contactData}
        repoUrl={pkg.repository.url}
      />
    ),
  },
  {
    name: 'Desenvolvimento de Software Multiplataforma',
    url: '/dsm',
    icon: 'graduation-cap',
    isInternal: true,
    badge: `${calculateDiplomaProgress(sweData, 0)}%`,
    comp: () => <Diploma diplomaData={sweData} />,
  },
];

export const tabs: TabLink[] = [
  {
    name: 'SkillsController.java',
    url: '/skills',
    icon: ['fab', 'java'],
    color: red,
    mdFileName: 'skills',
  },
  {
    name: '.edu',
    url: '/education',
    icon: 'university',
    color: cyan,
    mdFileName: 'education',
  },
  {
    name: 'projects.properties',
    url: '/projects',
    icon: 'sliders-h',
    color: green,
    mdFileName: 'projects',
  },
  {
    name: 'certificates.css',
    url: '/certificates',
    icon: ['fab', 'css3'],
    color: midBlue,
    mdFileName: 'certificates',
  },
];
