/*
 * FIXME(Renzo): Hardcoding user/tag information for now. In the future, these
 * will be ID'd so I"ll probably have to change some stuff maybe?
 */

const BUILDS = [
  {
    id: '0',
    title: 'Introductory Deep Learning Build',
    description:
      'Learn the basics of deep learning, starting from nothing to finishing your first project.',
    userId: '1',
    tagIds: ['4', '5', '6'],
    favoriteCount: 54,
    resourceIds: ['0', '1', '2', '3', '4'],
  },
  {
    id: '1',
    title: 'Free Beginner to Advanced React Tutorial Build',
    description:
      'A curated collection of free online React resources to get you from complete beginner to React software engineer.',
    userId: '2',
    tagIds: ['7', '0', '8', '9'],
    favoriteCount: 32,
    resourceIds: [],
  },
  {
    id: '2',
    title: 'UI UX Beginner Crash Course',
    description:
      'The best free video tutorials on getting into UI/UX design as a software engineer.',
    userId: '7',
    tagIds: ['7', '10', '11', '12'],
    favoriteCount: 78,
    resourceIds: [],
  },
  {
    id: '3',
    title: 'Unity Intermediate Game Development Build',
    description:
      'Build upon Unity/C# fundamentals by following these video tutorials.',
    userId: '6',
    tagIds: ['13', '14', '15'],
    favoriteCount: 54,
    resourceIds: [],
  },
];

export default BUILDS;
