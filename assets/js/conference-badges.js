/**
 * Add conference-specific classes to publication badges for styling
 */
document.addEventListener('DOMContentLoaded', function() {
  const conferenceMappings = {
    'ICLR': 'ICLR',
    'ICLR Oral': 'ICLR-Oral',
    'NeurIPS': 'NeurIPS',
    'ACL': 'ACL',
    'ICML': 'ICML',
    'CVPR': 'CVPR',
    'ECCV': 'ECCV',
    'EMNLP': 'EMNLP',
    'KDD': 'KDD',
    'arXiv': 'arXiv',
    'TIP': 'TIP',
    'TCSVT': 'TCSVT',
    'TMM': 'TMM',
    'TKDE': 'TKDE',
    'TOMM': 'TOMM',
    'ACSSens': 'ACSSens',
    'Neupl': 'Neupl'
  };

  // Find all abbr elements in publication listings
  const abbrElements = document.querySelectorAll('.publications .abbr abbr, .bibtex .abbr abbr');
  
  abbrElements.forEach(function(abbr) {
    const text = abbr.textContent.trim();
    
    // Check for exact matches first
    if (conferenceMappings[text]) {
      abbr.classList.add('venue-' + conferenceMappings[text]);
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
