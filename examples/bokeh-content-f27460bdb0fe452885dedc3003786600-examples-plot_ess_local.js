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
    
      
      
    
      const element = document.getElementById("ec2d154d-63b4-4457-be6b-2f3d0ac517f3");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid 'ec2d154d-63b4-4457-be6b-2f3d0ac517f3' but no matching script tag was found.")
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
                    
                  const docs_json = '{"8abb2cd5-9d44-43d1-866c-6fc799e198b8":{"defs":[],"roots":{"references":[{"attributes":{"below":[{"id":"21062"}],"center":[{"id":"21065"},{"id":"21069"}],"height":500,"left":[{"id":"21066"}],"output_backend":"webgl","renderers":[{"id":"21093"},{"id":"21097"},{"id":"21099"},{"id":"21100"}],"title":{"id":"21101"},"toolbar":{"id":"21080"},"toolbar_location":null,"width":500,"x_range":{"id":"21054"},"x_scale":{"id":"21058"},"y_range":{"id":"21056"},"y_scale":{"id":"21060"}},"id":"21053","subtype":"Figure","type":"Plot"},{"attributes":{"overlay":{"id":"21079"}},"id":"21074","type":"LassoSelectTool"},{"attributes":{"callback":null},"id":"21077","type":"HoverTool"},{"attributes":{"coordinates":null,"data_source":{"id":"21096"},"glyph":{"id":"21095"},"group":null,"hover_glyph":null,"view":{"id":"21098"}},"id":"21097","type":"GlyphRenderer"},{"attributes":{"data":{"x":{"__ndarray__":"AAAAAAAAAACamZmZmZmpP5qZmZmZmbk/NDMzMzMzwz+amZmZmZnJPwAAAAAAANA/NDMzMzMz0z9nZmZmZmbWP5qZmZmZmdk/zczMzMzM3D8AAAAAAADgP5qZmZmZmeE/NDMzMzMz4z/NzMzMzMzkP2dmZmZmZuY/AAAAAAAA6D+amZmZmZnpPzQzMzMzM+s/zczMzMzM7D9nZmZmZmbuPw==","dtype":"float64","order":"little","shape":[20]},"y":{"__ndarray__":"PSWUrfrllUC6ZTfE07ObQIHSxpixD6BAXutlA2Fon0AWemawUmmdQBJdptJ4v59A48F0NdPPm0BhLg6FQP6cQNT8SMHKBJ1AN/hQuCybnECYCNGlG7+ZQOL2UqcslZtAhDgC8IHHmkDe0e+ORHOcQJp7JDyiB6BAxVCwvOY1n0BSmX0dHQ6gQFTe5JuCLJtAHVMIAw/Em0COFXr8JyGYQA==","dtype":"float64","order":"little","shape":[20]}},"selected":{"id":"21111"},"selection_policy":{"id":"21110"}},"id":"21089","type":"ColumnDataSource"},{"attributes":{},"id":"21076","type":"SaveTool"},{"attributes":{},"id":"21105","type":"BasicTickFormatter"},{"attributes":{},"id":"21070","type":"ResetTool"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"hatch_alpha":{"value":0.1},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"21091","type":"Circle"},{"attributes":{},"id":"21075","type":"UndoTool"},{"attributes":{},"id":"21109","type":"AllLabels"},{"attributes":{},"id":"21054","type":"DataRange1d"},{"attributes":{"fill_alpha":{"value":0.2},"fill_color":{"value":"#1f77b4"},"hatch_alpha":{"value":0.2},"line_alpha":{"value":0.2},"line_color":{"value":"#1f77b4"},"size":{"value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"21092","type":"Circle"},{"attributes":{"coordinates":null,"group":null,"text":"mu"},"id":"21101","type":"Title"},{"attributes":{},"id":"21106","type":"AllLabels"},{"attributes":{},"id":"21073","type":"WheelZoomTool"},{"attributes":{"coordinates":null,"group":null,"line_alpha":0.7,"line_width":1.5,"location":0},"id":"21099","type":"Span"},{"attributes":{"coordinates":null,"data_source":{"id":"21089"},"glyph":{"id":"21090"},"group":null,"hover_glyph":null,"muted_glyph":{"id":"21092"},"nonselection_glyph":{"id":"21091"},"view":{"id":"21094"}},"id":"21093","type":"GlyphRenderer"},{"attributes":{},"id":"21113","type":"Selection"},{"attributes":{},"id":"21071","type":"PanTool"},{"attributes":{"tools":[{"id":"21070"},{"id":"21071"},{"id":"21072"},{"id":"21073"},{"id":"21074"},{"id":"21075"},{"id":"21076"},{"id":"21077"}]},"id":"21080","type":"Toolbar"},{"attributes":{"coordinates":null,"fill_alpha":0.5,"fill_color":"lightgrey","group":null,"level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"syncable":false,"xs_units":"screen","ys_units":"screen"},"id":"21079","type":"PolyAnnotation"},{"attributes":{"axis":{"id":"21066"},"coordinates":null,"dimension":1,"group":null,"ticker":null},"id":"21069","type":"Grid"},{"attributes":{"overlay":{"id":"21078"}},"id":"21072","type":"BoxZoomTool"},{"attributes":{},"id":"21112","type":"UnionRenderers"},{"attributes":{"axis_label":"Quantile","coordinates":null,"formatter":{"id":"21108"},"group":null,"major_label_policy":{"id":"21109"},"ticker":{"id":"21063"}},"id":"21062","type":"LinearAxis"},{"attributes":{"source":{"id":"21089"}},"id":"21094","type":"CDSView"},{"attributes":{"angle":{"value":1.5707963267948966},"line_alpha":{"value":0.35},"marker":{"value":"dash"},"size":{"value":8},"x":{"field":"rug_x"},"y":{"field":"rug_y"}},"id":"21095","type":"Scatter"},{"attributes":{},"id":"21108","type":"BasicTickFormatter"},{"attributes":{"bottom_units":"screen","coordinates":null,"fill_alpha":0.5,"fill_color":"lightgrey","group":null,"left_units":"screen","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"right_units":"screen","syncable":false,"top_units":"screen"},"id":"21078","type":"BoxAnnotation"},{"attributes":{},"id":"21111","type":"Selection"},{"attributes":{},"id":"21056","type":"DataRange1d"},{"attributes":{"coordinates":null,"group":null,"line_color":"red","line_dash":[6],"line_width":3,"location":400},"id":"21100","type":"Span"},{"attributes":{"children":[[{"id":"21053"},0,0]]},"id":"21117","type":"GridBox"},{"attributes":{},"id":"21067","type":"BasicTicker"},{"attributes":{"toolbars":[{"id":"21080"}],"tools":[{"id":"21070"},{"id":"21071"},{"id":"21072"},{"id":"21073"},{"id":"21074"},{"id":"21075"},{"id":"21076"},{"id":"21077"}]},"id":"21118","type":"ProxyToolbar"},{"attributes":{"toolbar":{"id":"21118"},"toolbar_location":"above"},"id":"21119","type":"ToolbarBox"},{"attributes":{},"id":"21063","type":"BasicTicker"},{"attributes":{"axis_label":"ESS for small intervals","coordinates":null,"formatter":{"id":"21105"},"group":null,"major_label_policy":{"id":"21106"},"ticker":{"id":"21067"}},"id":"21066","type":"LinearAxis"},{"attributes":{"children":[{"id":"21119"},{"id":"21117"}]},"id":"21120","type":"Column"},{"attributes":{},"id":"21110","type":"UnionRenderers"},{"attributes":{},"id":"21060","type":"LinearScale"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"size":{"value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"21090","type":"Circle"},{"attributes":{"data":{"rug_x":{"__ndarray__":"u/QnuP7V5z9SIsxa1SLgPw==","dtype":"float64","order":"little","shape":[2]},"rug_y":{"__ndarray__":"nB0+wbWyacCcHT7BtbJpwA==","dtype":"float64","order":"little","shape":[2]}},"selected":{"id":"21113"},"selection_policy":{"id":"21112"}},"id":"21096","type":"ColumnDataSource"},{"attributes":{"source":{"id":"21096"}},"id":"21098","type":"CDSView"},{"attributes":{},"id":"21058","type":"LinearScale"},{"attributes":{"axis":{"id":"21062"},"coordinates":null,"group":null,"ticker":null},"id":"21065","type":"Grid"}],"root_ids":["21120"]},"title":"Bokeh Application","version":"2.4.1"}}';
                  const render_items = [{"docid":"8abb2cd5-9d44-43d1-866c-6fc799e198b8","root_ids":["21120"],"roots":{"21120":"ec2d154d-63b4-4457-be6b-2f3d0ac517f3"}}];
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