export interface CompanyBrand {
  logoKey: string;
  logoUrl?: string;
  current?: boolean;
}

/** Brand metadata keyed by experience / education / certification id */
export const experienceBrands: Record<string, CompanyBrand> = {
  'globant-aci': {
    logoKey: 'globant',
    logoUrl: 'logos/globant.png',
    current: true
  },
  'globant-io': {
    logoKey: 'globant',
    logoUrl: 'logos/globant.png'
  },
  aci: {
    logoKey: 'aci',
    logoUrl: 'logos/american century investment.png'
  },
  freelance: {
    logoKey: 'freelancer',
    logoUrl: 'logos/freelancer.png'
  },
  unicolombo: {
    logoKey: 'unicolombo',
    logoUrl: 'logos/unicolombo.png'
  },
  io: {
    logoKey: 'io',
    logoUrl: 'logos/io.png'
  },
  'pragma-iii': {
    logoKey: 'pragma',
    logoUrl: 'logos/prgma.png'
  },
  'pragma-ii': {
    logoKey: 'pragma',
    logoUrl: 'logos/prgma.png'
  },
  godigital: {
    logoKey: 'godigital'
  },
  simbiotica: {
    logoKey: 'simbiotica'
  },
  autotest: {
    logoKey: 'autotest'
  }
};

export const educationBrands: Record<string, CompanyBrand> = {
  masters: {
    logoKey: 'sabana',
    logoUrl: 'universidad/universidad de la sabana.png',
    current: true
  },
  systems: {
    logoKey: 'unicolombo',
    logoUrl: 'universidad/unicolombo.png'
  },
  english: {
    logoKey: 'colombo',
    logoUrl: 'universidad/colombo.png'
  }
};

/** Certification brand metadata keyed by issuer name */
export const certificationBrands: Record<string, CompanyBrand> = {
  AWS: { logoKey: 'aws', logoUrl: 'certificaciones/aws.png' },
  Udemy: { logoKey: 'udemy', logoUrl: 'certificaciones/udemy.png' },
  Platzi: { logoKey: 'platzi', logoUrl: 'certificaciones/platzi.png' },
  AlgoExpert: { logoKey: 'algoexpert', logoUrl: 'certificaciones/algo expert.png' },
  'Refactoring.Guru': { logoKey: 'refactoring', logoUrl: 'certificaciones/refactoring guru.png' },
  'EF SET': { logoKey: 'efset', logoUrl: 'certificaciones/ef set.png' }
};
