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
    
      
      
    
      const element = document.getElementById("53f893fd-4cbf-4fcf-8f3c-def3f26d2701");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid '53f893fd-4cbf-4fcf-8f3c-def3f26d2701' but no matching script tag was found.")
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
                    
                  const docs_json = '{"7f306a95-57ef-421f-9020-ce49585f1fc8":{"defs":[],"roots":{"references":[{"attributes":{},"id":"20518","type":"UnionRenderers"},{"attributes":{"coordinates":null,"formatter":{"id":"20507"},"group":null,"major_label_policy":{"id":"20508"},"major_label_text_font_size":"0pt","major_tick_line_color":null,"minor_tick_line_color":null,"ticker":{"id":"20458"}},"id":"20457","type":"LinearAxis"},{"attributes":{},"id":"20510","type":"BasicTickFormatter"},{"attributes":{},"id":"20519","type":"Selection"},{"attributes":{},"id":"20449","type":"LinearScale"},{"attributes":{"source":{"id":"20486"}},"id":"20491","type":"CDSView"},{"attributes":{},"id":"20512","type":"UnionRenderers"},{"attributes":{"children":[[{"id":"20444"},0,0]]},"id":"20523","type":"GridBox"},{"attributes":{"source":{"id":"20480"}},"id":"20485","type":"CDSView"},{"attributes":{"coordinates":null,"formatter":{"id":"20510"},"group":null,"major_label_policy":{"id":"20511"},"ticker":{"id":"20454"}},"id":"20453","type":"LinearAxis"},{"attributes":{"line_color":"#c10c90","line_width":4.330127018922193,"x":{"field":"x"},"y":{"field":"y"}},"id":"20487","type":"Line"},{"attributes":{"toolbars":[{"id":"20471"}],"tools":[{"id":"20461"},{"id":"20462"},{"id":"20463"},{"id":"20464"},{"id":"20465"},{"id":"20466"},{"id":"20467"},{"id":"20468"}]},"id":"20524","type":"ProxyToolbar"},{"attributes":{"line_alpha":0.1,"line_color":"#c10c90","line_width":4.330127018922193,"x":{"field":"x"},"y":{"field":"y"}},"id":"20488","type":"Line"},{"attributes":{"children":[{"id":"20525"},{"id":"20523"}]},"id":"20526","type":"Column"},{"attributes":{"fill_alpha":{"value":0.2},"fill_color":{"value":"#2a2eec"},"hatch_alpha":{"value":0.2},"line_alpha":{"value":0.2},"line_color":{"value":"#1f77b4"},"size":{"value":8.660254037844386},"x":{"value":-0.0029135803780740164},"y":{"value":0}},"id":"20495","type":"Circle"},{"attributes":{"axis":{"id":"20453"},"coordinates":null,"group":null,"ticker":null},"id":"20456","type":"Grid"},{"attributes":{},"id":"20466","type":"UndoTool"},{"attributes":{"overlay":{"id":"20470"}},"id":"20465","type":"LassoSelectTool"},{"attributes":{"coordinates":null,"group":null},"id":"20504","type":"Title"},{"attributes":{"data":{"x":[-1.9040259413199274,1.8078221014364193],"y":[0,0]},"selected":{"id":"20513"},"selection_policy":{"id":"20512"}},"id":"20480","type":"ColumnDataSource"},{"attributes":{"coordinates":null,"data_source":{"id":"20480"},"glyph":{"id":"20481"},"group":null,"hover_glyph":null,"muted_glyph":{"id":"20483"},"nonselection_glyph":{"id":"20482"},"view":{"id":"20485"}},"id":"20484","type":"GlyphRenderer"},{"attributes":{"data":{"x":{"__ndarray__":"FRx+8A5uAsDsq3R/ipD6v+yrdH+KkPq/7Kt0f4qQ+r80ET6N8b3yvzQRPo3xvfK/NBE+jfG98r80ET6N8b3yv6IYAQonyui/ohgBCifK6L+iGAEKJ8rov6IYAQonyui/ohgBCifK6L+iGAEKJ8rov3TEbrelstm/dMRut6Wy2b90xG63pbLZv3TEbrelstm/dMRut6Wy2b90xG63pbLZv3TEbrelstm/WhicSp3OqL9aGJxKnc6ov1oYnEqdzqi/WhicSp3OqL9aGJxKnc6ov1oYnEqdzqi/WhicSp3OqL9EFimaSU/TP0QWKZpJT9M/RBYpmklP0z9EFimaSU/TP0QWKZpJT9M/RBYpmklP0z9EFimaSU/TP456/k5DI+Q/jnr+TkMj5D+Oev5OQyPkP456/k5DI+Q/jnr+TkMj5D/ZQm3RXADwP9lCbdFcAPA/2UJt0VwA8D/ZQm3RXADwP9By6jDXYPY/0HLqMNdg9j/Qcuow12D2P2DXuW8eufw/YNe5bx65/D+lK8ris3EDQA==","dtype":"float64","order":"little","shape":[50]},"y":{"__ndarray__":"Hkoo7ZC0xD8eSijtkLTEPy1vvGPZDt8/plxyKLXh6T8eSijtkLTEPy1vvGPZDt8/plxyKLXh6T/aQIPP/h3yPx5KKO2QtMQ/LW+8Y9kO3z+mXHIoteHpP9pAg8/+HfI/YlPNCiNL9z/qZRdGR3j8Px5KKO2QtMQ/LW+8Y9kO3z+mXHIoteHpP9pAg8/+HfI/YlPNCiNL9z/qZRdGR3j8Pzi8sMC10gBAHkoo7ZC0xD8tb7xj2Q7fP6Zccii14ek/2kCDz/4d8j9iU80KI0v3P+plF0ZHePw/OLywwLXSAEAeSijtkLTEPy1vvGPZDt8/plxyKLXh6T/aQIPP/h3yP2JTzQojS/c/6mUXRkd4/D84vLDAtdIAQB5KKO2QtMQ/LW+8Y9kO3z+mXHIoteHpP9pAg8/+HfI/YlPNCiNL9z8eSijtkLTEPy1vvGPZDt8/plxyKLXh6T/aQIPP/h3yPx5KKO2QtMQ/LW+8Y9kO3z+mXHIoteHpPx5KKO2QtMQ/LW+8Y9kO3z8eSijtkLTEPw==","dtype":"float64","order":"little","shape":[50]}},"selected":{"id":"20519"},"selection_policy":{"id":"20518"}},"id":"20498","type":"ColumnDataSource"},{"attributes":{"fill_alpha":{"value":0.2},"fill_color":{"value":"#fa7c17"},"hatch_alpha":{"value":0.2},"hatch_color":{"value":"#fa7c17"},"line_alpha":{"value":0.2},"line_color":{"value":"#fa7c17"},"radius":{"value":0.16176044063520661},"radius_dimension":"y","x":{"field":"x"},"y":{"field":"y"}},"id":"20501","type":"Circle"},{"attributes":{"fill_color":{"value":"#fa7c17"},"hatch_color":{"value":"#fa7c17"},"line_color":{"value":"#fa7c17"},"radius":{"value":0.16176044063520661},"radius_dimension":"y","x":{"field":"x"},"y":{"field":"y"}},"id":"20499","type":"Circle"},{"attributes":{"tools":[{"id":"20461"},{"id":"20462"},{"id":"20463"},{"id":"20464"},{"id":"20465"},{"id":"20466"},{"id":"20467"},{"id":"20468"}]},"id":"20471","type":"Toolbar"},{"attributes":{},"id":"20513","type":"Selection"},{"attributes":{"bottom_units":"screen","coordinates":null,"fill_alpha":0.5,"fill_color":"lightgrey","group":null,"left_units":"screen","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"right_units":"screen","syncable":false,"top_units":"screen"},"id":"20469","type":"BoxAnnotation"},{"attributes":{"callback":null},"id":"20468","type":"HoverTool"},{"attributes":{},"id":"20464","type":"WheelZoomTool"},{"attributes":{},"id":"20467","type":"SaveTool"},{"attributes":{"fill_color":{"value":"#2a2eec"},"line_color":{"value":"#1f77b4"},"size":{"value":8.660254037844386},"x":{"value":-0.0029135803780740164},"y":{"value":0}},"id":"20493","type":"Circle"},{"attributes":{},"id":"20461","type":"ResetTool"},{"attributes":{},"id":"20445","type":"DataRange1d"},{"attributes":{"data":{"x":[-0.667808853419204,0.6382905789859445],"y":[0,0]},"selected":{"id":"20515"},"selection_policy":{"id":"20514"}},"id":"20486","type":"ColumnDataSource"},{"attributes":{"coordinates":null,"fill_alpha":0.5,"fill_color":"lightgrey","group":null,"level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"syncable":false,"xs_units":"screen","ys_units":"screen"},"id":"20470","type":"PolyAnnotation"},{"attributes":{},"id":"20451","type":"LinearScale"},{"attributes":{"coordinates":null,"data_source":{"id":"20492"},"glyph":{"id":"20493"},"group":null,"hover_glyph":null,"muted_glyph":{"id":"20495"},"nonselection_glyph":{"id":"20494"},"view":{"id":"20497"}},"id":"20496","type":"GlyphRenderer"},{"attributes":{},"id":"20507","type":"BasicTickFormatter"},{"attributes":{},"id":"20458","type":"BasicTicker"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#2a2eec"},"hatch_alpha":{"value":0.1},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"value":8.660254037844386},"x":{"value":-0.0029135803780740164},"y":{"value":0}},"id":"20494","type":"Circle"},{"attributes":{"line_color":"#c10c90","line_width":2.1650635094610964,"x":{"field":"x"},"y":{"field":"y"}},"id":"20481","type":"Line"},{"attributes":{},"id":"20514","type":"UnionRenderers"},{"attributes":{"below":[{"id":"20453"}],"center":[{"id":"20456"},{"id":"20460"}],"height":360,"left":[{"id":"20457"}],"match_aspect":true,"output_backend":"webgl","renderers":[{"id":"20484"},{"id":"20490"},{"id":"20496"},{"id":"20502"}],"title":{"id":"20504"},"toolbar":{"id":"20471"},"toolbar_location":null,"width":720,"x_range":{"id":"20445"},"x_scale":{"id":"20449"},"y_range":{"id":"20447"},"y_scale":{"id":"20451"}},"id":"20444","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"20462","type":"PanTool"},{"attributes":{},"id":"20447","type":"DataRange1d"},{"attributes":{},"id":"20508","type":"AllLabels"},{"attributes":{"coordinates":null,"data_source":{"id":"20498"},"glyph":{"id":"20499"},"group":null,"hover_glyph":null,"muted_glyph":{"id":"20501"},"nonselection_glyph":{"id":"20500"},"view":{"id":"20503"}},"id":"20502","type":"GlyphRenderer"},{"attributes":{"line_alpha":0.2,"line_color":"#c10c90","line_width":2.1650635094610964,"x":{"field":"x"},"y":{"field":"y"}},"id":"20483","type":"Line"},{"attributes":{"coordinates":null,"data_source":{"id":"20486"},"glyph":{"id":"20487"},"group":null,"hover_glyph":null,"muted_glyph":{"id":"20489"},"nonselection_glyph":{"id":"20488"},"view":{"id":"20491"}},"id":"20490","type":"GlyphRenderer"},{"attributes":{},"id":"20515","type":"Selection"},{"attributes":{},"id":"20516","type":"UnionRenderers"},{"attributes":{"source":{"id":"20498"}},"id":"20503","type":"CDSView"},{"attributes":{"axis":{"id":"20457"},"coordinates":null,"dimension":1,"group":null,"ticker":null},"id":"20460","type":"Grid"},{"attributes":{"data":{},"selected":{"id":"20517"},"selection_policy":{"id":"20516"}},"id":"20492","type":"ColumnDataSource"},{"attributes":{"overlay":{"id":"20469"}},"id":"20463","type":"BoxZoomTool"},{"attributes":{"line_alpha":0.1,"line_color":"#c10c90","line_width":2.1650635094610964,"x":{"field":"x"},"y":{"field":"y"}},"id":"20482","type":"Line"},{"attributes":{},"id":"20517","type":"Selection"},{"attributes":{},"id":"20511","type":"AllLabels"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#fa7c17"},"hatch_alpha":{"value":0.1},"hatch_color":{"value":"#fa7c17"},"line_alpha":{"value":0.1},"line_color":{"value":"#fa7c17"},"radius":{"value":0.16176044063520661},"radius_dimension":"y","x":{"field":"x"},"y":{"field":"y"}},"id":"20500","type":"Circle"},{"attributes":{"source":{"id":"20492"}},"id":"20497","type":"CDSView"},{"attributes":{},"id":"20454","type":"BasicTicker"},{"attributes":{"toolbar":{"id":"20524"},"toolbar_location":"above"},"id":"20525","type":"ToolbarBox"},{"attributes":{"line_alpha":0.2,"line_color":"#c10c90","line_width":4.330127018922193,"x":{"field":"x"},"y":{"field":"y"}},"id":"20489","type":"Line"}],"root_ids":["20526"]},"title":"Bokeh Application","version":"2.4.1"}}';
                  const render_items = [{"docid":"7f306a95-57ef-421f-9020-ce49585f1fc8","root_ids":["20526"],"roots":{"20526":"53f893fd-4cbf-4fcf-8f3c-def3f26d2701"}}];
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