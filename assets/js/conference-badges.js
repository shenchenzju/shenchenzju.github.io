/**
 * Add conference-specific classes to publication badges for styling
 */
document.addEventListener('DOMContentLoaded', function() {
  const conferenceConfig = {
    'ICLR': {
      name: 'ICLR'
    },
    'ICLR Oral': {
      name: 'ICLR',
      isOral: true
    },
    'NeurIPS': {
      name: 'NeurIPS'
    },
    'ACL': {
      name: 'ACL'
    },
    'ICML': {
      name: 'ICML'
    },
    'CVPR': {
      name: 'CVPR'
    },
    'ECCV': {
      name: 'ECCV'
    },
    'EMNLP': {
      name: 'EMNLP'
    },
    'KDD': {
      name: 'KDD'
    },
    'arXiv': {
      name: 'arXiv'
    },
    'TIP': {
      name: 'TIP'
    },
    'TCSVT': {
      name: 'TCSVT'
    },
    'TMM': {
      name: 'TMM'
    },
    'TKDE': {
      name: 'TKDE'
    },
    'TOMM': {
      name: 'TOMM'
    },
    'ACSSens': {
      name: 'ACS'
    },
    'Neupl': {
      name: 'NeuPL'
    }
  };

  // Find all abbr elements in publication listings
  const abbrElements = document.querySelectorAll('.publications .abbr abbr, .bibtex .abbr abbr');
  
  abbrElements.forEach(function(abbr) {
    const text = abbr.textContent.trim();
    
    // Check for exact matches first
    if (conferenceConfig[text]) {
      const config = conferenceConfig[text];
      abbr.classList.add('venue-' + config.name);
    }
    
    // Check for partial matches (Oral in title)
    if (text.includes('Oral')) {
      abbr.classList.add('venue-Oral');
    }
    
    // Check for ICLR specifically (in case of different formats)
    if (text.includes('ICLR') && !text.includes('Oral')) {
      abbr.classList.add('venue-ICLR');
    }
  });
});
