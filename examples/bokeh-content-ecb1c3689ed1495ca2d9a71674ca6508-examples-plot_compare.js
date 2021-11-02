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
    
      
      
    
      const element = document.getElementById("8df8c525-c987-4325-acd6-bd2eac5b6ab7");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid '8df8c525-c987-4325-acd6-bd2eac5b6ab7' but no matching script tag was found.")
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
                    
                  const docs_json = '{"dbb0ea6a-0433-463b-8409-92a7a0546c28":{"defs":[],"roots":{"references":[{"attributes":{"fill_color":{"value":null},"line_width":{"value":2},"size":{"value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"18149","type":"Circle"},{"attributes":{"overlay":{"id":"18124"}},"id":"18119","type":"LassoSelectTool"},{"attributes":{"data":{"xs":[[-30.896420573800537,-30.724327779399562]],"ys":[[-0.75,-0.75]]},"selected":{"id":"18177"},"selection_policy":{"id":"18176"}},"id":"18142","type":"ColumnDataSource"},{"attributes":{"toolbar":{"id":"18188"},"toolbar_location":"above"},"id":"18189","type":"ToolbarBox"},{"attributes":{},"id":"18170","type":"AllLabels"},{"attributes":{},"id":"18182","type":"UnionRenderers"},{"attributes":{"overlay":{"id":"18123"}},"id":"18117","type":"BoxZoomTool"},{"attributes":{"source":{"id":"18142"}},"id":"18147","type":"CDSView"},{"attributes":{"children":[[{"id":"18098"},0,0]]},"id":"18187","type":"GridBox"},{"attributes":{},"id":"18175","type":"Selection"},{"attributes":{"fill_alpha":{"value":0.2},"fill_color":{"value":"black"},"hatch_alpha":{"value":0.2},"line_alpha":{"value":0.2},"line_width":{"value":2},"size":{"value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"18163","type":"Circle"},{"attributes":{},"id":"18180","type":"UnionRenderers"},{"attributes":{},"id":"18118","type":"WheelZoomTool"},{"attributes":{"toolbars":[{"id":"18125"}],"tools":[{"id":"18115"},{"id":"18116"},{"id":"18117"},{"id":"18118"},{"id":"18119"},{"id":"18120"},{"id":"18121"},{"id":"18122"}]},"id":"18188","type":"ProxyToolbar"},{"attributes":{"coordinates":null,"dimension":"height","group":null,"line_color":"grey","line_dash":[6],"line_width":1.7677669529663689,"location":-30.687290318389813},"id":"18166","type":"Span"},{"attributes":{},"id":"18173","type":"AllLabels"},{"attributes":{"fill_color":{"value":"black"},"line_width":{"value":2},"size":{"value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"18161","type":"Circle"},{"attributes":{"coordinates":null,"data_source":{"id":"18160"},"glyph":{"id":"18161"},"group":null,"hover_glyph":null,"muted_glyph":{"id":"18163"},"nonselection_glyph":{"id":"18162"},"view":{"id":"18165"}},"id":"18164","type":"GlyphRenderer"},{"attributes":{},"id":"18177","type":"Selection"},{"attributes":{"axis":{"id":"18107"},"coordinates":null,"group":null,"ticker":null},"id":"18110","type":"Grid"},{"attributes":{"source":{"id":"18160"}},"id":"18165","type":"CDSView"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"grey"},"hatch_alpha":{"value":0.1},"line_alpha":{"value":0.1},"line_color":{"value":"grey"},"line_width":{"value":2},"marker":{"value":"triangle"},"size":{"value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"18138","type":"Scatter"},{"attributes":{"data":{"x":{"__ndarray__":"KAWarnTPPsA=","dtype":"float64","order":"little","shape":[1]},"y":[-0.75]},"selected":{"id":"18175"},"selection_policy":{"id":"18174"}},"id":"18136","type":"ColumnDataSource"},{"attributes":{},"id":"18176","type":"UnionRenderers"},{"attributes":{"below":[{"id":"18107"}],"center":[{"id":"18110"},{"id":"18114"}],"height":500,"left":[{"id":"18111"}],"output_backend":"webgl","renderers":[{"id":"18140"},{"id":"18146"},{"id":"18152"},{"id":"18158"},{"id":"18164"},{"id":"18166"}],"title":{"id":"18167"},"toolbar":{"id":"18125"},"toolbar_location":null,"width":500,"x_range":{"id":"18099"},"x_scale":{"id":"18103"},"y_range":{"id":"18101"},"y_scale":{"id":"18105"}},"id":"18098","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"18115","type":"ResetTool"},{"attributes":{"tools":[{"id":"18115"},{"id":"18116"},{"id":"18117"},{"id":"18118"},{"id":"18119"},{"id":"18120"},{"id":"18121"},{"id":"18122"}]},"id":"18125","type":"Toolbar"},{"attributes":{},"id":"18108","type":"BasicTicker"},{"attributes":{},"id":"18181","type":"Selection"},{"attributes":{"ticks":[0.0,-0.75,-1.0]},"id":"18134","type":"FixedTicker"},{"attributes":{},"id":"18172","type":"BasicTickFormatter"},{"attributes":{"coordinates":null,"data_source":{"id":"18154"},"glyph":{"id":"18155"},"group":null,"hover_glyph":null,"muted_glyph":{"id":"18157"},"nonselection_glyph":{"id":"18156"},"view":{"id":"18159"}},"id":"18158","type":"GlyphRenderer"},{"attributes":{"callback":null},"id":"18122","type":"HoverTool"},{"attributes":{},"id":"18183","type":"Selection"},{"attributes":{"coordinates":null,"data_source":{"id":"18148"},"glyph":{"id":"18149"},"group":null,"hover_glyph":null,"muted_glyph":{"id":"18151"},"nonselection_glyph":{"id":"18150"},"view":{"id":"18153"}},"id":"18152","type":"GlyphRenderer"},{"attributes":{},"id":"18178","type":"UnionRenderers"},{"attributes":{},"id":"18116","type":"PanTool"},{"attributes":{},"id":"18103","type":"LinearScale"},{"attributes":{"data":{"x":{"__ndarray__":"eFcgQvKvPsAoBZqudM8+wA==","dtype":"float64","order":"little","shape":[2]},"y":[0.0,-1.0]},"selected":{"id":"18179"},"selection_policy":{"id":"18178"}},"id":"18148","type":"ColumnDataSource"},{"attributes":{"source":{"id":"18136"}},"id":"18141","type":"CDSView"},{"attributes":{"coordinates":null,"formatter":{"id":"18169"},"group":null,"major_label_overrides":{"-0.75":"","-1":"Centered 8 schools","0":"Non-centered 8 schools"},"major_label_policy":{"id":"18170"},"ticker":{"id":"18134"}},"id":"18111","type":"LinearAxis"},{"attributes":{"source":{"id":"18148"}},"id":"18153","type":"CDSView"},{"attributes":{"line_alpha":{"value":0.1},"line_color":{"value":"grey"},"xs":{"field":"xs"},"ys":{"field":"ys"}},"id":"18144","type":"MultiLine"},{"attributes":{"end":0.5,"start":-1.5},"id":"18101","type":"DataRange1d"},{"attributes":{"xs":{"field":"xs"},"ys":{"field":"ys"}},"id":"18155","type":"MultiLine"},{"attributes":{},"id":"18179","type":"Selection"},{"attributes":{"coordinates":null,"fill_alpha":0.5,"fill_color":"lightgrey","group":null,"level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"syncable":false,"xs_units":"screen","ys_units":"screen"},"id":"18124","type":"PolyAnnotation"},{"attributes":{"coordinates":null,"group":null},"id":"18167","type":"Title"},{"attributes":{"coordinates":null,"data_source":{"id":"18136"},"glyph":{"id":"18137"},"group":null,"hover_glyph":null,"muted_glyph":{"id":"18139"},"nonselection_glyph":{"id":"18138"},"view":{"id":"18141"}},"id":"18140","type":"GlyphRenderer"},{"attributes":{"fill_alpha":{"value":0.2},"fill_color":{"value":"grey"},"hatch_alpha":{"value":0.2},"line_alpha":{"value":0.2},"line_color":{"value":"grey"},"line_width":{"value":2},"marker":{"value":"triangle"},"size":{"value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"18139","type":"Scatter"},{"attributes":{"line_alpha":{"value":0.1},"xs":{"field":"xs"},"ys":{"field":"ys"}},"id":"18156","type":"MultiLine"},{"attributes":{},"id":"18169","type":"BasicTickFormatter"},{"attributes":{"coordinates":null,"data_source":{"id":"18142"},"glyph":{"id":"18143"},"group":null,"hover_glyph":null,"muted_glyph":{"id":"18145"},"nonselection_glyph":{"id":"18144"},"view":{"id":"18147"}},"id":"18146","type":"GlyphRenderer"},{"attributes":{"axis_label":"Log","coordinates":null,"formatter":{"id":"18172"},"group":null,"major_label_policy":{"id":"18173"},"ticker":{"id":"18108"}},"id":"18107","type":"LinearAxis"},{"attributes":{"line_alpha":{"value":0.2},"line_color":{"value":"grey"},"xs":{"field":"xs"},"ys":{"field":"ys"}},"id":"18145","type":"MultiLine"},{"attributes":{"data":{"x":{"__ndarray__":"m/f9Q2zYPcDPGP3dN9s9wA==","dtype":"float64","order":"little","shape":[2]},"y":[0.0,-1.0]},"selected":{"id":"18183"},"selection_policy":{"id":"18182"}},"id":"18160","type":"ColumnDataSource"},{"attributes":{},"id":"18105","type":"LinearScale"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":null},"hatch_alpha":{"value":0.1},"line_alpha":{"value":0.1},"line_width":{"value":2},"size":{"value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"18150","type":"Circle"},{"attributes":{"axis":{"id":"18111"},"coordinates":null,"dimension":1,"group":null,"ticker":null},"id":"18114","type":"Grid"},{"attributes":{"line_alpha":{"value":0.2},"xs":{"field":"xs"},"ys":{"field":"ys"}},"id":"18157","type":"MultiLine"},{"attributes":{},"id":"18174","type":"UnionRenderers"},{"attributes":{"fill_color":{"value":"grey"},"line_color":{"value":"grey"},"line_width":{"value":2},"marker":{"value":"triangle"},"size":{"value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"18137","type":"Scatter"},{"attributes":{"children":[{"id":"18189"},{"id":"18187"}]},"id":"18190","type":"Column"},{"attributes":{"bottom_units":"screen","coordinates":null,"fill_alpha":0.5,"fill_color":"lightgrey","group":null,"left_units":"screen","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"right_units":"screen","syncable":false,"top_units":"screen"},"id":"18123","type":"BoxAnnotation"},{"attributes":{},"id":"18099","type":"DataRange1d"},{"attributes":{},"id":"18120","type":"UndoTool"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"black"},"hatch_alpha":{"value":0.1},"line_alpha":{"value":0.1},"line_width":{"value":2},"size":{"value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"18162","type":"Circle"},{"attributes":{"fill_alpha":{"value":0.2},"fill_color":{"value":null},"hatch_alpha":{"value":0.2},"line_alpha":{"value":0.2},"line_width":{"value":2},"size":{"value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"18151","type":"Circle"},{"attributes":{"data":{"xs":[[-32.052286212415325,-29.322294424364305],[-32.23721121836336,-29.38353713483674]],"ys":[[0.0,0.0],[-1.0,-1.0]]},"selected":{"id":"18181"},"selection_policy":{"id":"18180"}},"id":"18154","type":"ColumnDataSource"},{"attributes":{},"id":"18121","type":"SaveTool"},{"attributes":{"source":{"id":"18154"}},"id":"18159","type":"CDSView"},{"attributes":{"line_color":{"value":"grey"},"xs":{"field":"xs"},"ys":{"field":"ys"}},"id":"18143","type":"MultiLine"}],"root_ids":["18190"]},"title":"Bokeh Application","version":"2.4.1"}}';
                  const render_items = [{"docid":"dbb0ea6a-0433-463b-8409-92a7a0546c28","root_ids":["18190"],"roots":{"18190":"8df8c525-c987-4325-acd6-bd2eac5b6ab7"}}];
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