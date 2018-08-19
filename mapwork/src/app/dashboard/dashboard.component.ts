import { Component, OnInit } from '@angular/core';

import {ZoomSlider} from 'ol/control.js';
import Map from 'ol/Map.js';
import View from 'ol/View.js';
import TileLayer from 'ol/layer/Tile.js';
import OSM from 'ol/source/OSM.js';
import TileWMS from 'ol/source/TileWMS.js';
import * as $ from 'jquery';
import {getCenter} from 'ol/extent.js';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

	layers1
 	map
 	layers
 	extent = [0, 0, 1024, 968];


 	layerOSM;

   	layerMQ;

  	constructor() { }

  	ngOnInit() {
  		
  		this.map=new Map('map');

  		this.layerOSM = [
        	new TileLayer({
          		source: new OSM(),
          		//visible: false,
          		preload: Infinity,
        	}),

      	];
        this.layerMQ = [new TileLayer({
                source:new TileWMS({
			        url: 'https://ahocevar.com/geoserver/wms',
	            	params: {'LAYERS': 'topp:states', 'TILED': true},
	            	serverType: 'geoserver',
	            	// Countries have transparency, so do not fade tiles:
	            	transition: 0
			      })
            }),
            ];    

      	this.layers1 = [
        	new TileLayer({
          		source: new OSM(),
          		//visible: false,
          		preload: Infinity,
        	}),

      	];

      	this.map = new Map({
        	layers: this.layerOSM,
        	target: 'map',
        	view: new View({
          		zoom: 5,
          		center: getCenter(this.extent)
        	})
      	});
 		
 		 //this.map.addLayers([this.layers1]);
 		 

 		$('#addOSM').on('click', function() {
 				
                   this.map=new Map({
        			layers: this.layerMQ
        	})

        	console.log(this.map)

       });


  	}


  	tilelayer()
  	{
   		this.layers = [
        	new TileLayer({
          		source: new OSM()
        	}),
        new TileLayer({
          	extent: [-13884991, 2870341, -7455066, 6338219],
          	source: new TileWMS({
            	url: 'https://ahocevar.com/geoserver/wms',
            	params: {'LAYERS': 'topp:states', 'TILED': true},
            	serverType: 'geoserver',
            	// Countries have transparency, so do not fade tiles:
            	transition: 0
          		})
        	})
      	];
      this.map = new Map({
        	layers: this.layers,
        	target: 'map',
        	view: new View({
          		center: [-10997148, 4569099],
          		zoom: 5
        	})
      	});


			/*var map = new Map({
			  target: 'map',
			  view: new View({
			    projection: 'EPSG:3857', //HERE IS THE VIEW PROJECTION
			    center: [0, 0],
			    zoom: 5
			  }),
			  layers: [
			    new TileLayer({
			      source: new TileWMS({
			        projection: 'EPSG:4326', //HERE IS THE DATA SOURCE PROJECTION
			        url: 'http://demo.boundlessgeo.com/geoserver/wms',
			        params: {
			          'LAYERS': 'ne:NE1_HR_LC_SR_W_DR'
			        }
			      })
			    })
			  ]
			});*/
			      	

  }

}

