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
    
      
      
    
      const element = document.getElementById("9a30122c-d03a-4bd5-9b09-3eefb22bcae7");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid '9a30122c-d03a-4bd5-9b09-3eefb22bcae7' but no matching script tag was found.")
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
                    
                  const docs_json = '{"4188ec13-7b8a-48df-8a53-874cbc8c9843":{"defs":[],"roots":{"references":[{"attributes":{"coordinates":null,"fill_alpha":0.5,"fill_color":"lightgrey","group":null,"level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"syncable":false,"xs_units":"screen","ys_units":"screen"},"id":"20625","type":"PolyAnnotation"},{"attributes":{"below":[{"id":"20608"}],"center":[{"id":"20611"},{"id":"20615"}],"height":288,"left":[{"id":"20612"}],"output_backend":"webgl","renderers":[{"id":"20637"}],"title":{"id":"20639"},"toolbar":{"id":"20626"},"toolbar_location":null,"width":432,"x_range":{"id":"20600"},"x_scale":{"id":"20604"},"y_range":{"id":"20602"},"y_scale":{"id":"20606"}},"id":"20599","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"20616","type":"ResetTool"},{"attributes":{"axis":{"id":"20612"},"coordinates":null,"dimension":1,"group":null,"ticker":null},"id":"20615","type":"Grid"},{"attributes":{"line_color":{"value":"#2a2eec"},"marker":{"field":"Cross"},"size":{"field":"sizes"},"x":{"field":"xdata"},"y":{"field":"ydata"}},"id":"20635","type":"Scatter"},{"attributes":{},"id":"20646","type":"BasicTickFormatter"},{"attributes":{"axis_label":"ELPD difference","coordinates":null,"formatter":{"id":"20643"},"group":null,"major_label_policy":{"id":"20644"},"ticker":{"id":"20613"}},"id":"20612","type":"LinearAxis"},{"attributes":{},"id":"20600","type":"DataRange1d"},{"attributes":{"coordinates":null,"formatter":{"id":"20646"},"group":null,"major_label_policy":{"id":"20647"},"ticker":{"id":"20609"}},"id":"20608","type":"LinearAxis"},{"attributes":{},"id":"20647","type":"AllLabels"},{"attributes":{},"id":"20613","type":"BasicTicker"},{"attributes":{},"id":"20622","type":"SaveTool"},{"attributes":{},"id":"20648","type":"UnionRenderers"},{"attributes":{},"id":"20617","type":"PanTool"},{"attributes":{},"id":"20604","type":"LinearScale"},{"attributes":{},"id":"20643","type":"BasicTickFormatter"},{"attributes":{"data":{"sizes":{"__ndarray__":"AAAAAAAAGEAAAAAAAAAYQAAAAAAAABhAAAAAAAAAGEAAAAAAAAAYQAAAAAAAABhAAAAAAAAAGEAAAAAAAAAYQA==","dtype":"float64","order":"little","shape":[8]},"xdata":[0,1,2,3,4,5,6,7],"ydata":{"__ndarray__":"gA887TQjqb8AatEMjdaMvwDAoFmzDUE/AIcKht05k7+A2X/x9IekPwDgrH2oaFM/ANQFB3wcsb8Am1vpFXuQvw==","dtype":"float64","order":"little","shape":[8]}},"selected":{"id":"20649"},"selection_policy":{"id":"20648"}},"id":"20636","type":"ColumnDataSource"},{"attributes":{},"id":"20619","type":"WheelZoomTool"},{"attributes":{},"id":"20609","type":"BasicTicker"},{"attributes":{},"id":"20602","type":"DataRange1d"},{"attributes":{"children":[[{"id":"20599"},0,0]]},"id":"20653","type":"GridBox"},{"attributes":{"source":{"id":"20636"}},"id":"20638","type":"CDSView"},{"attributes":{},"id":"20606","type":"LinearScale"},{"attributes":{"axis":{"id":"20608"},"coordinates":null,"group":null,"ticker":null},"id":"20611","type":"Grid"},{"attributes":{"tools":[{"id":"20616"},{"id":"20617"},{"id":"20618"},{"id":"20619"},{"id":"20620"},{"id":"20621"},{"id":"20622"},{"id":"20623"}]},"id":"20626","type":"Toolbar"},{"attributes":{"coordinates":null,"group":null,"text":"Centered eight - Non centered eight"},"id":"20639","type":"Title"},{"attributes":{"callback":null},"id":"20623","type":"HoverTool"},{"attributes":{},"id":"20644","type":"AllLabels"},{"attributes":{"coordinates":null,"data_source":{"id":"20636"},"glyph":{"id":"20635"},"group":null,"hover_glyph":null,"view":{"id":"20638"}},"id":"20637","type":"GlyphRenderer"},{"attributes":{"overlay":{"id":"20624"}},"id":"20618","type":"BoxZoomTool"},{"attributes":{},"id":"20649","type":"Selection"},{"attributes":{"children":[{"id":"20655"},{"id":"20653"}]},"id":"20656","type":"Column"},{"attributes":{"toolbars":[{"id":"20626"}],"tools":[{"id":"20616"},{"id":"20617"},{"id":"20618"},{"id":"20619"},{"id":"20620"},{"id":"20621"},{"id":"20622"},{"id":"20623"}]},"id":"20654","type":"ProxyToolbar"},{"attributes":{"toolbar":{"id":"20654"},"toolbar_location":"above"},"id":"20655","type":"ToolbarBox"},{"attributes":{"overlay":{"id":"20625"}},"id":"20620","type":"LassoSelectTool"},{"attributes":{},"id":"20621","type":"UndoTool"},{"attributes":{"bottom_units":"screen","coordinates":null,"fill_alpha":0.5,"fill_color":"lightgrey","group":null,"left_units":"screen","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"right_units":"screen","syncable":false,"top_units":"screen"},"id":"20624","type":"BoxAnnotation"}],"root_ids":["20656"]},"title":"Bokeh Application","version":"2.4.1"}}';
                  const render_items = [{"docid":"4188ec13-7b8a-48df-8a53-874cbc8c9843","root_ids":["20656"],"roots":{"20656":"9a30122c-d03a-4bd5-9b09-3eefb22bcae7"}}];
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