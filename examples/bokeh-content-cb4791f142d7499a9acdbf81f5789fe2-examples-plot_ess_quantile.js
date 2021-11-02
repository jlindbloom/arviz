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
    
      
      
    
      const element = document.getElementById("8484f942-1474-4cc5-9a0e-d4b819fad108");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid '8484f942-1474-4cc5-9a0e-d4b819fad108' but no matching script tag was found.")
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
                    
                  const docs_json = '{"441b3174-eac2-4ecd-908d-4c7e7429ab8a":{"defs":[],"roots":{"references":[{"attributes":{},"id":"21225","type":"UnionRenderers"},{"attributes":{"axis_label":"Quantile","coordinates":null,"formatter":{"id":"21223"},"group":null,"major_label_policy":{"id":"21224"},"ticker":{"id":"21183"}},"id":"21182","type":"LinearAxis"},{"attributes":{"bottom_units":"screen","coordinates":null,"fill_alpha":0.5,"fill_color":"lightgrey","group":null,"left_units":"screen","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"right_units":"screen","syncable":false,"top_units":"screen"},"id":"21198","type":"BoxAnnotation"},{"attributes":{"tools":[{"id":"21190"},{"id":"21191"},{"id":"21192"},{"id":"21193"},{"id":"21194"},{"id":"21195"},{"id":"21196"},{"id":"21197"}]},"id":"21200","type":"Toolbar"},{"attributes":{},"id":"21183","type":"BasicTicker"},{"attributes":{},"id":"21176","type":"DataRange1d"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"size":{"value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"21210","type":"Circle"},{"attributes":{"children":[[{"id":"21173"},0,0]]},"id":"21230","type":"GridBox"},{"attributes":{"axis":{"id":"21182"},"coordinates":null,"group":null,"ticker":null},"id":"21185","type":"Grid"},{"attributes":{},"id":"21180","type":"LinearScale"},{"attributes":{},"id":"21178","type":"LinearScale"},{"attributes":{},"id":"21196","type":"SaveTool"},{"attributes":{"data":{"x":{"__ndarray__":"mpmZmZmZqT/SjhUII+24P2wor6G8hsI/bolTv+eWyD9w6vfcEqfOP7klTv2eW9I/O1YgjLRj1T+8hvIaymvYPz23xKnfc9s/vueWOPV73j8gjLRjBcLgP2GkHSsQRuI/oryG8hrK4z/i1O+5JU7lPyPtWIEw0uY/YwXCSDtW6D+kHSsQRtrpP+U1lNdQXus/JU79nlvi7D9mZmZmZmbuPw==","dtype":"float64","order":"little","shape":[20]},"y":{"__ndarray__":"R2riOHxslUDJrxt4rb2XQC8UfR7VtJlAMRHUGWndmUBKO3TVSyObQNp1b/0mJp1ASsbCePPwnkB+Du/cq5qgQH8ihBoHoKBAjJ8qLZB5oECYlOwhLnyfQD8CvMP22p1A58Gm42rqnEALInuU09KdQICWYY7d25xA2A/0ZSlsnEBzLBEly1mdQE4F40OedZlAKS7heDC7m0BmB8tcKnmYQA==","dtype":"float64","order":"little","shape":[20]}},"selected":{"id":"21226"},"selection_policy":{"id":"21225"}},"id":"21209","type":"ColumnDataSource"},{"attributes":{"source":{"id":"21209"}},"id":"21214","type":"CDSView"},{"attributes":{"overlay":{"id":"21199"}},"id":"21194","type":"LassoSelectTool"},{"attributes":{},"id":"21191","type":"PanTool"},{"attributes":{"coordinates":null,"group":null,"line_color":"red","line_dash":[6],"line_width":3,"location":400},"id":"21215","type":"Span"},{"attributes":{"coordinates":null,"fill_alpha":0.5,"fill_color":"lightgrey","group":null,"level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"syncable":false,"xs_units":"screen","ys_units":"screen"},"id":"21199","type":"PolyAnnotation"},{"attributes":{},"id":"21224","type":"AllLabels"},{"attributes":{},"id":"21190","type":"ResetTool"},{"attributes":{},"id":"21195","type":"UndoTool"},{"attributes":{"callback":null},"id":"21197","type":"HoverTool"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"hatch_alpha":{"value":0.1},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"21211","type":"Circle"},{"attributes":{},"id":"21174","type":"DataRange1d"},{"attributes":{},"id":"21223","type":"BasicTickFormatter"},{"attributes":{},"id":"21187","type":"BasicTicker"},{"attributes":{},"id":"21220","type":"BasicTickFormatter"},{"attributes":{"coordinates":null,"group":null,"text":"sigma"},"id":"21216","type":"Title"},{"attributes":{"axis_label":"ESS for quantiles","coordinates":null,"formatter":{"id":"21220"},"group":null,"major_label_policy":{"id":"21221"},"ticker":{"id":"21187"}},"id":"21186","type":"LinearAxis"},{"attributes":{},"id":"21193","type":"WheelZoomTool"},{"attributes":{},"id":"21221","type":"AllLabels"},{"attributes":{"children":[{"id":"21232"},{"id":"21230"}]},"id":"21233","type":"Column"},{"attributes":{},"id":"21226","type":"Selection"},{"attributes":{"toolbars":[{"id":"21200"}],"tools":[{"id":"21190"},{"id":"21191"},{"id":"21192"},{"id":"21193"},{"id":"21194"},{"id":"21195"},{"id":"21196"},{"id":"21197"}]},"id":"21231","type":"ProxyToolbar"},{"attributes":{"fill_alpha":{"value":0.2},"fill_color":{"value":"#1f77b4"},"hatch_alpha":{"value":0.2},"line_alpha":{"value":0.2},"line_color":{"value":"#1f77b4"},"size":{"value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"21212","type":"Circle"},{"attributes":{"axis":{"id":"21186"},"coordinates":null,"dimension":1,"group":null,"ticker":null},"id":"21189","type":"Grid"},{"attributes":{"overlay":{"id":"21198"}},"id":"21192","type":"BoxZoomTool"},{"attributes":{"below":[{"id":"21182"}],"center":[{"id":"21185"},{"id":"21189"}],"height":500,"left":[{"id":"21186"}],"output_backend":"webgl","renderers":[{"id":"21213"},{"id":"21215"}],"title":{"id":"21216"},"toolbar":{"id":"21200"},"toolbar_location":null,"width":500,"x_range":{"id":"21174"},"x_scale":{"id":"21178"},"y_range":{"id":"21176"},"y_scale":{"id":"21180"}},"id":"21173","subtype":"Figure","type":"Plot"},{"attributes":{"coordinates":null,"data_source":{"id":"21209"},"glyph":{"id":"21210"},"group":null,"hover_glyph":null,"muted_glyph":{"id":"21212"},"nonselection_glyph":{"id":"21211"},"view":{"id":"21214"}},"id":"21213","type":"GlyphRenderer"},{"attributes":{"toolbar":{"id":"21231"},"toolbar_location":"above"},"id":"21232","type":"ToolbarBox"}],"root_ids":["21233"]},"title":"Bokeh Application","version":"2.4.1"}}';
                  const render_items = [{"docid":"441b3174-eac2-4ecd-908d-4c7e7429ab8a","root_ids":["21233"],"roots":{"21233":"8484f942-1474-4cc5-9a0e-d4b819fad108"}}];
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