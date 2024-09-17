import React from 'react';
import CategoryArtDisplay from '../../Components/CategoryArtDisplay';

// Import your category data
import * as paintings from '../../Categories/PaintingsList';
import * as sculptures from '../../Categories/SculpturesList';
import * as photography from '../../Categories/PhotographyList';

export default function Paintings() {
  const categories = ['Paintings', 'Sculptures', 'Photography'];
  const artTypes = [paintings, sculptures, photography];

  return <CategoryArtDisplay categories={categories} artTypes={artTypes} quote="Art is the journey of a free soul." />;
}
