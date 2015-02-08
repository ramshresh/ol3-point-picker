(function($){
    /**
     * Created by girc on 2/8/15.
     */
    /**
     * Define a namespace for the application.
     */
    window.app = {};
    var app = window.app;

//
// Define rotate to north control.
//

    /**
     * @constructor
     * @extends {ol.control.Control}
     * @param {Object=} opt_options Control options.
     */
    app.PointPickerControl = function(opt_options) {
        var pointPicker = this;

        var options = opt_options || {};

        this.containerId=options.containerId || 'ol3_pp_container';
        this.latitudeId=options.latitudeId||"ol3_pp_latitude",
        this.longitudeId=options.longitudeId|| "ol3_pp_longitude",
        this.addressId=options.addressId|| "ol3_pp_place_name",
        this.btnOkId=options.btnOkId||'ol3_pp_btn_ok'

        this.template=options.template;
        this.templateData=options.templateData;

        var btnOkHandler=function(e){
            alert('Ok button clicked!');
        }

   /*     var handlePointPicker = function(e) {
            alert('Ok button clicked!');
        };

        btnOk.addEventListener('click', handlePointPicker, false);
        btnOk.addEventListener('touchstart', handlePointPicker, false);*/


        var closer = document.createElement('a');
        closer.className = 'ol-popup-closer';
        closer.href = '#';
        closer.addEventListener('click', function(evt) {
            pointPicker.container.style.display = 'none';
            pointPicker.closer.blur();
            evt.preventDefault();
        }, false);
        this.closer=closer;

        var container = document.createElement('div');
        container.className = 'point-picker ol-unselectable';
   /*     container.appendChild(this.inputAddress);
        container.appendChild(this.inputLatitude);
        container.appendChild(this.inputLongitude);
        container.appendChild(this.btnOk);*/
        container.appendChild(this.closer);

        this.container=container;

        if(this.template==undefined){
            this.template =
                "<input id={{latitudeId}} type='text' placeholder='Latitude'>" +
                "<input id={{longitudeId}} type='text' placeholder='Longitude'>" +
                "<input id={{addressId}} type='text' placeholder='Address'>" +
                "<button id={{btnOkId}}>Ok</button> ";
        }
        if(this.templateData==undefined){
            this.templateData= {
                containerId:this.containerId,
                latitudeId: this.latitudeId,
                longitudeId: this.longitudeId,
                addressId: this.addressId,
                btnOkId:this.btnOkId
            };
        }
        ol.control.Control.call(this, {
            element: this.container,
            target: options.target
        });

        this.setContent(this.template,this.templateData);
    };
    ol.inherits(app.PointPickerControl, ol.control.Control);
    /**
     * sets the content of the point picker container with supplied template and template data
     * @param template
     * @param templateData
     */
    app.PointPickerControl.prototype.setContent = function(template,templateData){
        console.log(templateData);
        console.log(template);
        console.log( $(this.container));
        var html = Mustache.to_html(template, templateData);
        console.log(html);
        $(this.container).html(html);

    };

})(jQuery);
