import React from 'react';
import CategoryArtDisplay from '../../Components/CategoryArtDisplay';

// Import your category data
import * as paintings from '../../Categories/PaintingsList';
import * as sculptures from '../../Categories/SculpturesList';
import * as photography from '../../Categories/PhotographyList';

export default function Paintings() {
  const categories = ['Paintings', 'Sculptures', 'Photography'];
  const artTypes = [paintings, sculptures, photography];

  return <CategoryArtDisplay categories={categories} artTypes={artTypes} quote="Vestibulum a scelerisque ipsum, sit amet gravida turpis. Aenean velit massa, faucibus convallis lectus id, viverra tincidunt libero. 
        Praesent id nisl ac ipsum bibendum sollicitudin eget non magna. Nulla sollicitudin mauris ac leo auctor iaculis. Cras sed felis nec felis suscipit
        gravida sed id orci. Maecenas felis ante, pharetra et luctus ac, rhoncus sit amet lacus. Sed sit amet fermentum lacus. Integer condimentum cursus 
        luctus." />;
}
