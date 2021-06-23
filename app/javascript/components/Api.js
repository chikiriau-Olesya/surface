import React from 'react';

export const cityViaId = function(id, callback){
  sequelize.query('SELECT cities.name FROM `cities` LEFT JOIN products on products.city_id = cities.id', { type: sequelize.QueryTypes.SELECT})
    .then(citnames => {
      callback(citnames);
    });
};
