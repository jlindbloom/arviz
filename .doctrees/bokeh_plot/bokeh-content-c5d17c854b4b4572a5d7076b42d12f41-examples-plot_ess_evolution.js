(function() {
  const fn = function() {
    
    (function(root) {
      function now() {
        return new Date();
      }
    
      const force = false;
    
      if (typeof root._bokeh_onload_callbacks === "undefined" || force === true) {
        root._bokeh_onload_callbacks = [];
        root._bokeh_is_loading = undefined;
      }
    
      
      
    
      const element = document.getElementById("782f4b92-7002-49cb-8af9-7277b0fac9c0");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid '782f4b92-7002-49cb-8af9-7277b0fac9c0' but no matching script tag was found.")
        }
      
    
      function run_callbacks() {
        try {
          root._bokeh_onload_callbacks.forEach(function(callback) {
            if (callback != null)
              callback();
          });
        } finally {
          delete root._bokeh_onload_callbacks
        }
        console.debug("Bokeh: all callbacks have finished");
      }
    
      function load_libs(css_urls, js_urls, callback) {
        if (css_urls == null) css_urls = [];
        if (js_urls == null) js_urls = [];
    
        root._bokeh_onload_callbacks.push(callback);
        if (root._bokeh_is_loading > 0) {
          console.debug("Bokeh: BokehJS is being loaded, scheduling callback at", now());
          return null;
        }
        if (js_urls == null || js_urls.length === 0) {
          run_callbacks();
          return null;
        }
        console.debug("Bokeh: BokehJS not loaded, scheduling load and callback at", now());
        root._bokeh_is_loading = css_urls.length + js_urls.length;
    
        function on_load() {
          root._bokeh_is_loading--;
          if (root._bokeh_is_loading === 0) {
            console.debug("Bokeh: all BokehJS libraries/stylesheets loaded");
            run_callbacks()
          }
        }
    
        function on_error(url) {
          console.error("failed to load " + url);
        }
    
        for (let i = 0; i < css_urls.length; i++) {
          const url = css_urls[i];
          const element = document.createElement("link");
          element.onload = on_load;
          element.onerror = on_error.bind(null, url);
          element.rel = "stylesheet";
          element.type = "text/css";
          element.href = url;
          console.debug("Bokeh: injecting link tag for BokehJS stylesheet: ", url);
          document.body.appendChild(element);
        }
    
        for (let i = 0; i < js_urls.length; i++) {
          const url = js_urls[i];
          const element = document.createElement('script');
          element.onload = on_load;
          element.onerror = on_error.bind(null, url);
          element.async = false;
          element.src = url;
          console.debug("Bokeh: injecting script tag for BokehJS library: ", url);
          document.head.appendChild(element);
        }
      };
    
      function inject_raw_css(css) {
        const element = document.createElement("style");
        element.appendChild(document.createTextNode(css));
        document.body.appendChild(element);
      }
    
      
      const js_urls = ["https://cdn.bokeh.org/bokeh/release/bokeh-2.4.1.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-gl-2.4.1.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-2.4.1.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-tables-2.4.1.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-mathjax-2.4.1.min.js"];
      const css_urls = [];
      
    
      const inline_js = [
        function(Bokeh) {
          Bokeh.set_log_level("info");
        },
        
        function(Bokeh) {
          (function() {
            const fn = function() {
              Bokeh.safely(function() {
                (function(root) {
                  function embed_document(root) {
                    
                  const docs_json = '{"d75367a8-bf73-4442-980b-f5546d4b2bd6":{"defs":[],"roots":{"references":[{"attributes":{"toolbars":[{"id":"20924"}],"tools":[{"id":"20914"},{"id":"20915"},{"id":"20916"},{"id":"20917"},{"id":"20918"},{"id":"20919"},{"id":"20920"},{"id":"20921"}]},"id":"20982","type":"ProxyToolbar"},{"attributes":{"bottom_units":"screen","coordinates":null,"fill_alpha":0.5,"fill_color":"lightgrey","group":null,"left_units":"screen","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"right_units":"screen","syncable":false,"top_units":"screen"},"id":"20922","type":"BoxAnnotation"},{"attributes":{"line_alpha":0.1,"line_color":"#1f77b4","x":{"field":"x"},"y":{"field":"y"}},"id":"20941","type":"Line"},{"attributes":{},"id":"20976","type":"UnionRenderers"},{"attributes":{},"id":"20970","type":"UnionRenderers"},{"attributes":{"label":{"value":"bulk"},"renderers":[{"id":"20937"},{"id":"20943"}]},"id":"20959","type":"LegendItem"},{"attributes":{"click_policy":"hide","coordinates":null,"group":null,"items":[{"id":"20959"},{"id":"20960"}],"location":"center_right","orientation":"horizontal"},"id":"20958","type":"Legend"},{"attributes":{"line_alpha":0.2,"line_color":"orange","x":{"field":"x"},"y":{"field":"y"}},"id":"20948","type":"Line"},{"attributes":{},"id":"20969","type":"AllLabels"},{"attributes":{"coordinates":null,"fill_alpha":0.5,"fill_color":"lightgrey","group":null,"level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"syncable":false,"xs_units":"screen","ys_units":"screen"},"id":"20923","type":"PolyAnnotation"},{"attributes":{},"id":"20977","type":"Selection"},{"attributes":{"line_alpha":0.2,"line_color":"#1f77b4","x":{"field":"x"},"y":{"field":"y"}},"id":"20942","type":"Line"},{"attributes":{},"id":"20919","type":"UndoTool"},{"attributes":{"label":{"value":"tail"},"renderers":[{"id":"20955"},{"id":"20949"}]},"id":"20960","type":"LegendItem"},{"attributes":{"overlay":{"id":"20922"}},"id":"20916","type":"BoxZoomTool"},{"attributes":{"line_color":"#1f77b4","x":{"field":"x"},"y":{"field":"y"}},"id":"20940","type":"Line"},{"attributes":{"above":[{"id":"20958"}],"below":[{"id":"20906"}],"center":[{"id":"20909"},{"id":"20913"}],"height":500,"left":[{"id":"20910"}],"output_backend":"webgl","renderers":[{"id":"20937"},{"id":"20943"},{"id":"20949"},{"id":"20955"},{"id":"20957"}],"title":{"id":"20961"},"toolbar":{"id":"20924"},"toolbar_location":null,"width":500,"x_range":{"id":"20898"},"x_scale":{"id":"20902"},"y_range":{"id":"20900"},"y_scale":{"id":"20904"}},"id":"20897","subtype":"Figure","type":"Plot"},{"attributes":{"data":{"x":{"__ndarray__":"AAAAAAAAWUAAAAAAAABpQAAAAAAAwHJAAAAAAAAAeUAAAAAAAEB/QAAAAAAAwIJAAAAAAADghUAAAAAAAACJQAAAAAAAIIxAAAAAAABAj0AAAAAAADCRQAAAAAAAwJJAAAAAAABQlEAAAAAAAOCVQAAAAAAAcJdAAAAAAAAAmUAAAAAAAJCaQAAAAAAAIJxAAAAAAACwnUAAAAAAAECfQA==","dtype":"float64","order":"little","shape":[20]},"y":{"__ndarray__":"0glo/ZHQYUCWuV3JG5ppQMqT1P2iwXVAqY8DrPB3e0Bh+Z3qJ/WAQBkscwHQK4RAmBvOlEfWikBL3Hu21ASOQLfWD/YkmpBAzy5bwfaykkBL+YYwKf6TQNX3Ngx5b5VAciIDv7ZVlkBpY4usN1KYQKnVB/o5gplAPOgo6bOym0CHt7M3Mq+fQCfqDPZjtqBAJ784mgSeoUD/m8TvrdqhQA==","dtype":"float64","order":"little","shape":[20]}},"selected":{"id":"20971"},"selection_policy":{"id":"20970"}},"id":"20933","type":"ColumnDataSource"},{"attributes":{},"id":"20917","type":"WheelZoomTool"},{"attributes":{"coordinates":null,"group":null,"line_color":"red","line_dash":[6],"line_width":3,"location":400},"id":"20957","type":"Span"},{"attributes":{},"id":"20911","type":"BasicTicker"},{"attributes":{"callback":null},"id":"20921","type":"HoverTool"},{"attributes":{},"id":"20973","type":"Selection"},{"attributes":{},"id":"20968","type":"BasicTickFormatter"},{"attributes":{"line_alpha":0.1,"line_color":"orange","x":{"field":"x"},"y":{"field":"y"}},"id":"20947","type":"Line"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"orange"},"hatch_alpha":{"value":0.1},"hatch_color":{"value":"orange"},"line_alpha":{"value":0.1},"line_color":{"value":"orange"},"size":{"value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"20953","type":"Circle"},{"attributes":{"coordinates":null,"data_source":{"id":"20951"},"glyph":{"id":"20952"},"group":null,"hover_glyph":null,"muted_glyph":{"id":"20954"},"nonselection_glyph":{"id":"20953"},"view":{"id":"20956"}},"id":"20955","type":"GlyphRenderer"},{"attributes":{},"id":"20971","type":"Selection"},{"attributes":{"source":{"id":"20933"}},"id":"20938","type":"CDSView"},{"attributes":{"overlay":{"id":"20923"}},"id":"20918","type":"LassoSelectTool"},{"attributes":{},"id":"20898","type":"DataRange1d"},{"attributes":{"fill_color":{"value":"orange"},"hatch_color":{"value":"orange"},"line_color":{"value":"orange"},"size":{"value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"20952","type":"Circle"},{"attributes":{"coordinates":null,"data_source":{"id":"20939"},"glyph":{"id":"20940"},"group":null,"hover_glyph":null,"muted_glyph":{"id":"20942"},"nonselection_glyph":{"id":"20941"},"view":{"id":"20944"}},"id":"20943","type":"GlyphRenderer"},{"attributes":{"axis_label":"Total number of draws","coordinates":null,"formatter":{"id":"20968"},"group":null,"major_label_policy":{"id":"20969"},"ticker":{"id":"20907"}},"id":"20906","type":"LinearAxis"},{"attributes":{"data":{"x":{"__ndarray__":"AAAAAAAAWUAAAAAAAABpQAAAAAAAwHJAAAAAAAAAeUAAAAAAAEB/QAAAAAAAwIJAAAAAAADghUAAAAAAAACJQAAAAAAAIIxAAAAAAABAj0AAAAAAADCRQAAAAAAAwJJAAAAAAABQlEAAAAAAAOCVQAAAAAAAcJdAAAAAAAAAmUAAAAAAAJCaQAAAAAAAIJxAAAAAAACwnUAAAAAAAECfQA==","dtype":"float64","order":"little","shape":[20]},"y":{"__ndarray__":"kUgpITo5UkD/4xVCu9ZkQIwda8wmdG9AKVV7klfmc0B9iLN6f4t2QCN384Oug3lAXRIP57k5gEDe8oZZBOGEQCI3trf/S4dAdSETuLRMikCa5sM7ewSJQLpDDoqDVoxADogAvE7ZjUBXvDQTTveQQPztYWbX55BATSx1OrcnkUCJGFkHolCTQIz00+lP8ZNAUA/0blR0lEAOVbAHnSuWQA==","dtype":"float64","order":"little","shape":[20]}},"selected":{"id":"20977"},"selection_policy":{"id":"20976"}},"id":"20951","type":"ColumnDataSource"},{"attributes":{},"id":"20902","type":"LinearScale"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"hatch_alpha":{"value":0.1},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"20935","type":"Circle"},{"attributes":{"source":{"id":"20951"}},"id":"20956","type":"CDSView"},{"attributes":{"coordinates":null,"data_source":{"id":"20933"},"glyph":{"id":"20934"},"group":null,"hover_glyph":null,"muted_glyph":{"id":"20936"},"nonselection_glyph":{"id":"20935"},"view":{"id":"20938"}},"id":"20937","type":"GlyphRenderer"},{"attributes":{"line_color":"orange","x":{"field":"x"},"y":{"field":"y"}},"id":"20946","type":"Line"},{"attributes":{},"id":"20907","type":"BasicTicker"},{"attributes":{"children":[{"id":"20983"},{"id":"20981"}]},"id":"20984","type":"Column"},{"attributes":{"tools":[{"id":"20914"},{"id":"20915"},{"id":"20916"},{"id":"20917"},{"id":"20918"},{"id":"20919"},{"id":"20920"},{"id":"20921"}]},"id":"20924","type":"Toolbar"},{"attributes":{"axis_label":"ESS","coordinates":null,"formatter":{"id":"20965"},"group":null,"major_label_policy":{"id":"20966"},"ticker":{"id":"20911"}},"id":"20910","type":"LinearAxis"},{"attributes":{"children":[[{"id":"20897"},0,0]]},"id":"20981","type":"GridBox"},{"attributes":{"coordinates":null,"group":null,"text":"b"},"id":"20961","type":"Title"},{"attributes":{"axis":{"id":"20910"},"coordinates":null,"dimension":1,"group":null,"ticker":null},"id":"20913","type":"Grid"},{"attributes":{"coordinates":null,"data_source":{"id":"20945"},"glyph":{"id":"20946"},"group":null,"hover_glyph":null,"muted_glyph":{"id":"20948"},"nonselection_glyph":{"id":"20947"},"view":{"id":"20950"}},"id":"20949","type":"GlyphRenderer"},{"attributes":{},"id":"20966","type":"AllLabels"},{"attributes":{"fill_alpha":{"value":0.2},"fill_color":{"value":"orange"},"hatch_alpha":{"value":0.2},"hatch_color":{"value":"orange"},"line_alpha":{"value":0.2},"line_color":{"value":"orange"},"size":{"value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"20954","type":"Circle"},{"attributes":{},"id":"20920","type":"SaveTool"},{"attributes":{"source":{"id":"20939"}},"id":"20944","type":"CDSView"},{"attributes":{},"id":"20914","type":"ResetTool"},{"attributes":{},"id":"20915","type":"PanTool"},{"attributes":{"data":{"x":{"__ndarray__":"AAAAAAAAWUAAAAAAAABpQAAAAAAAwHJAAAAAAAAAeUAAAAAAAEB/QAAAAAAAwIJAAAAAAADghUAAAAAAAACJQAAAAAAAIIxAAAAAAABAj0AAAAAAADCRQAAAAAAAwJJAAAAAAABQlEAAAAAAAOCVQAAAAAAAcJdAAAAAAAAAmUAAAAAAAJCaQAAAAAAAIJxAAAAAAACwnUAAAAAAAECfQA==","dtype":"float64","order":"little","shape":[20]},"y":{"__ndarray__":"0glo/ZHQYUCWuV3JG5ppQMqT1P2iwXVAqY8DrPB3e0Bh+Z3qJ/WAQBkscwHQK4RAmBvOlEfWikBL3Hu21ASOQLfWD/YkmpBAzy5bwfaykkBL+YYwKf6TQNX3Ngx5b5VAciIDv7ZVlkBpY4usN1KYQKnVB/o5gplAPOgo6bOym0CHt7M3Mq+fQCfqDPZjtqBAJ784mgSeoUD/m8TvrdqhQA==","dtype":"float64","order":"little","shape":[20]}},"selected":{"id":"20973"},"selection_policy":{"id":"20972"}},"id":"20939","type":"ColumnDataSource"},{"attributes":{},"id":"20904","type":"LinearScale"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"size":{"value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"20934","type":"Circle"},{"attributes":{"source":{"id":"20945"}},"id":"20950","type":"CDSView"},{"attributes":{},"id":"20972","type":"UnionRenderers"},{"attributes":{"data":{"x":{"__ndarray__":"AAAAAAAAWUAAAAAAAABpQAAAAAAAwHJAAAAAAAAAeUAAAAAAAEB/QAAAAAAAwIJAAAAAAADghUAAAAAAAACJQAAAAAAAIIxAAAAAAABAj0AAAAAAADCRQAAAAAAAwJJAAAAAAABQlEAAAAAAAOCVQAAAAAAAcJdAAAAAAAAAmUAAAAAAAJCaQAAAAAAAIJxAAAAAAACwnUAAAAAAAECfQA==","dtype":"float64","order":"little","shape":[20]},"y":{"__ndarray__":"kUgpITo5UkD/4xVCu9ZkQIwda8wmdG9AKVV7klfmc0B9iLN6f4t2QCN384Oug3lAXRIP57k5gEDe8oZZBOGEQCI3trf/S4dAdSETuLRMikCa5sM7ewSJQLpDDoqDVoxADogAvE7ZjUBXvDQTTveQQPztYWbX55BATSx1OrcnkUCJGFkHolCTQIz00+lP8ZNAUA/0blR0lEAOVbAHnSuWQA==","dtype":"float64","order":"little","shape":[20]}},"selected":{"id":"20975"},"selection_policy":{"id":"20974"}},"id":"20945","type":"ColumnDataSource"},{"attributes":{},"id":"20975","type":"Selection"},{"attributes":{"toolbar":{"id":"20982"},"toolbar_location":"above"},"id":"20983","type":"ToolbarBox"},{"attributes":{},"id":"20900","type":"DataRange1d"},{"attributes":{},"id":"20974","type":"UnionRenderers"},{"attributes":{"axis":{"id":"20906"},"coordinates":null,"group":null,"ticker":null},"id":"20909","type":"Grid"},{"attributes":{"fill_alpha":{"value":0.2},"fill_color":{"value":"#1f77b4"},"hatch_alpha":{"value":0.2},"line_alpha":{"value":0.2},"line_color":{"value":"#1f77b4"},"size":{"value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"20936","type":"Circle"},{"attributes":{},"id":"20965","type":"BasicTickFormatter"}],"root_ids":["20984"]},"title":"Bokeh Application","version":"2.4.1"}}';
                  const render_items = [{"docid":"d75367a8-bf73-4442-980b-f5546d4b2bd6","root_ids":["20984"],"roots":{"20984":"782f4b92-7002-49cb-8af9-7277b0fac9c0"}}];
                  root.Bokeh.embed.embed_items(docs_json, render_items);
                
                  }
                  if (root.Bokeh !== undefined) {
                    embed_document(root);
                  } else {
                    let attempts = 0;
                    const timer = setInterval(function(root) {
                      if (root.Bokeh !== undefined) {
                        clearInterval(timer);
                        embed_document(root);
                      } else {
                        attempts++;
                        if (attempts > 100) {
                          clearInterval(timer);
                          console.log("Bokeh: ERROR: Unable to run BokehJS code because BokehJS library is missing");
                        }
                      }
                    }, 10, root)
                  }
                })(window);
              });
            };
            if (document.readyState != "loading") fn();
            else document.addEventListener("DOMContentLoaded", fn);
          })();
        },
        function(Bokeh) {
        
        
        }
      ];
    
      function run_inline_js() {
        
        for (let i = 0; i < inline_js.length; i++) {
          inline_js[i].call(root, root.Bokeh);
        }
        
      }
    
      if (root._bokeh_is_loading === 0) {
        console.debug("Bokeh: BokehJS loaded, going straight to plotting");
        run_inline_js();
      } else {
        load_libs(css_urls, js_urls, function() {
          console.debug("Bokeh: BokehJS plotting callback run at", now());
          run_inline_js();
        });
      }
    }(window));
  };
  if (document.readyState != "loading") fn();
  else document.addEventListener("DOMContentLoaded", fn);
})();