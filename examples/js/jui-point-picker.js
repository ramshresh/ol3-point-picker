
//
// Create map, giving it a rotate to north control.
//
    var map = new ol.Map({
        controls: ol.control.defaults({
            attributionOptions: /** @type {olx.control.AttributionOptions} */ ({
                collapsible: false
            })
        }),
        layers: [
            new ol.layer.Tile({
                source: new ol.source.OSM()
            })
        ],
        target: 'map',
        view: new ol.View({
            center: [0, 0],
            zoom: 2,
        })
    });


    /*.extend([
        new app.PointPickerControl({

        })
    ])*/


    var ppTemplate=
        "<div id={{containerId}}>"+
            "<input id={{latitudeId}} type='text' placeholder='Latitude'>" +
            "<input id={{longitudeId}} type='text' placeholder='Longitude'>" +
            "<br>"+
            "<input id={{addressId}} type='text' placeholder='Address'>" +
            "<button id={{btnOkId}}>Ok</button> "+
        "</div>";

    var ppTemplateData= {
        containerId:"ol3_pp_container_1",
        latitudeId: "ol3_pp_latitude_1",
        longitudeId: "ol3_pp_longitude_1",
        addressId: "ol3_pp_place_name_1",
        btnOkId:'ol3_pp_btn_ok_1'
    };



    map.addControl(new app.PointPickerControl({
        template:ppTemplate,
        templateData:ppTemplateData
    }));

    $('#ol3_pp_container_1').dialog();
