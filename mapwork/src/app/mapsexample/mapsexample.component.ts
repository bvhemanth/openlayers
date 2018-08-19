import { Component, OnInit } from '@angular/core';
import Map from 'ol/Map.js';
      import View from 'ol/View.js';
      import TileLayer from 'ol/layer/Tile.js';
      import BingMaps from 'ol/source/BingMaps.js';
      import TileWMS from 'ol/source/TileWMS.js';
      import OSM from 'ol/source/OSM.js';
     import { Router } from '@angular/router'; 
@Component({
  selector: 'app-mapsexample',
  templateUrl: './mapsexample.component.html',
  styleUrls: ['./mapsexample.component.css']
})
export class MapsexampleComponent implements OnInit {
	
	layers = [];
	layername='Normal';
	tyleRasterLayer;
	tyleLayer;
	rasterLayer;
	navbar;
	styles = [
        'Normal',
        'Raster',
        'Tyle'
      ];
    displayLayer;

  	constructor(private router: Router) { }

  	ngOnInit() {

  		this.layers= [
  			new TileLayer({
	       		source: new OSM(),
	       		visible: true,
	       		preload: Infinity,
	       	}),
		    new TileLayer({
		    	visible: false,
        		preload: Infinity,
			    source: new TileWMS({
			       	projection: 'EPSG:4326', //HERE IS THE DATA SOURCE PROJECTION
			       	url: 'http://demo.boundlessgeo.com/geoserver/wms',
			       	params: {
			         	'LAYERS': 'ne:NE1_HR_LC_SR_W_DR'
			       	}
			     })
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
		]
     
      	var map = new Map({
        	layers: this.layers,
        	// Improve user experience by loading tiles while dragging/zooming. Will make
        	// zooming choppy on mobile or slow devices.
        	loadTilesWhileInteracting: true,
        	target: 'map',
        	view: new View({
          		center: [-10997148, 4569099],
          		zoom: 5
        	})
      	});
      	this.onChange();
  	}

  	onChange() {
        var style = this.layername;
        for (var i = 0, ii = this.layers.length; i < ii; ++i) {
          	this.layers[i].setVisible(this.styles[i] === style);
        }
     }

    layerChange(event,name)
	{
		
		if((this.rasterLayer==true)&&(name=="Raster"))
		{
			this.displayLayer='Raster';
			this.tyleLayer=0;
		}
		else if((this.tyleLayer==true)&&(name=="Tyle"))
		{
			this.rasterLayer=0;
			this.displayLayer='Tyle';
		}	
		else
		{
			this.displayLayer='Normal';
		}		
		console.log(this.displayLayer)
		for (var i = 0, ii = this.layers.length; i < ii; ++i) {
		    this.layers[i].setVisible(this.styles[i] === this.displayLayer );
		}
	}
	closeNav()
	{
		this.navbar=false;
	}
	opennav()
	{
		this.navbar=true;
	}
	logout()
	{
		localStorage.clear();
		this.router.navigate(['login']);
	}
}




