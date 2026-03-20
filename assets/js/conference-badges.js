/**
 * Add conference-specific classes and icons to publication badges for styling
 */
document.addEventListener('DOMContentLoaded', function() {
  const conferenceConfig = {
    'ICLR': {
      icon: '🎓',
      name: 'ICLR'
    },
    'ICLR Oral': {
      icon: '🏆',
      name: 'ICLR'
    },
    'NeurIPS': {
      icon: '🧠',
      name: 'NeurIPS'
    },
    'ACL': {
      icon: '📝',
      name: 'ACL'
    },
    'ICML': {
      icon: '🔬',
      name: 'ICML'
    },
    'CVPR': {
      icon: '👁️',
      name: 'CVPR'
    },
    'ECCV': {
      icon: '🔍',
      name: 'ECCV'
    },
    'EMNLP': {
      icon: '💬',
      name: 'EMNLP'
    },
    'KDD': {
      icon: '📊',
      name: 'KDD'
    },
    'arXiv': {
      icon: '📄',
      name: 'arXiv'
    },
    'TIP': {
      icon: '📑',
      name: 'TIP'
    },
    'TCSVT': {
      icon: '📹',
      name: 'TCSVT'
    },
    'TMM': {
      icon: '📺',
      name: 'TMM'
    },
    'TKDE': {
      icon: '🗄️',
      name: 'TKDE'
    },
    'TOMM': {
      icon: '📱',
      name: 'TOMM'
    },
    'ACSSens': {
      icon: '🧪',
      name: 'ACS'
    },
    'Neupl': {
      icon: '🔗',
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
      // Add icon before text
      if (text.includes('Oral')) {
        abbr.innerHTML = '🏆 ' + text;
      } else {
        abbr.innerHTML = config.icon + ' ' + text;
      }
    }
    
    // Check for partial matches (Oral in title)
    if (text.includes('Oral')) {
      abbr.classList.add('venue-Oral');
    }
    
    // Check for ICLR specifically (in case of different formats)
    if (text.includes('ICLR') && !text.includes('Oral')) {
      abbr.classList.add('venue-ICLR');
      if (!conferenceConfig[text]) {
        abbr.innerHTML = '🎓 ' + text;
      }
    }
  });
});
