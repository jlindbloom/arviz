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
    
      
      
    
      const element = document.getElementById("6defc787-9a8b-4854-b788-c5b99d8568ab");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid '6defc787-9a8b-4854-b788-c5b99d8568ab' but no matching script tag was found.")
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
                    
                  const docs_json = '{"df79a4ba-94ad-436e-8db8-bb80c167b892":{"defs":[],"roots":{"references":[{"attributes":{},"id":"41851","type":"BasicTickFormatter"},{"attributes":{"end":1,"start":-0.05},"id":"41750","type":"DataRange1d"},{"attributes":{"axis_label":"Quantile","coordinates":null,"formatter":{"id":"41854"},"group":null,"major_label_policy":{"id":"41855"},"ticker":{"id":"41757"}},"id":"41756","type":"LinearAxis"},{"attributes":{"coordinates":null,"fill_alpha":0.5,"fill_color":"lightgrey","group":null,"level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"syncable":false,"xs_units":"screen","ys_units":"screen"},"id":"41773","type":"PolyAnnotation"},{"attributes":{},"id":"41852","type":"AllLabels"},{"attributes":{"angle":{"value":1.5707963267948966},"line_alpha":{"value":0.35},"marker":{"value":"dash"},"size":{"value":8},"x":{"field":"rug_x"},"y":{"field":"rug_y"}},"id":"41843","type":"Scatter"},{"attributes":{"coordinates":null,"group":null,"line_alpha":0.5,"line_width":1.5,"location":0.2148430013731262},"id":"41840","type":"Span"},{"attributes":{},"id":"41872","type":"UnionRenderers"},{"attributes":{},"id":"41854","type":"BasicTickFormatter"},{"attributes":{},"id":"41873","type":"Selection"},{"attributes":{},"id":"41855","type":"AllLabels"},{"attributes":{"coordinates":null,"data_source":{"id":"41834"},"glyph":{"id":"41835"},"group":null,"hover_glyph":null,"muted_glyph":{"id":"41837"},"nonselection_glyph":{"id":"41836"},"view":{"id":"41839"}},"id":"41838","type":"GlyphRenderer"},{"attributes":{"axis_label":"MCSE for quantiles","coordinates":null,"formatter":{"id":"41851"},"group":null,"major_label_policy":{"id":"41852"},"ticker":{"id":"41761"}},"id":"41760","type":"LinearAxis"},{"attributes":{"source":{"id":"41819"}},"id":"41824","type":"CDSView"},{"attributes":{},"id":"41757","type":"BasicTicker"},{"attributes":{"source":{"id":"41829"}},"id":"41831","type":"CDSView"},{"attributes":{"coordinates":null,"group":null,"line_alpha":0.5,"line_width":1.5,"location":0.2515582690238702},"id":"41825","type":"Span"},{"attributes":{},"id":"41752","type":"LinearScale"},{"attributes":{},"id":"41856","type":"UnionRenderers"},{"attributes":{"coordinates":null,"data_source":{"id":"41819"},"glyph":{"id":"41820"},"group":null,"hover_glyph":null,"muted_glyph":{"id":"41822"},"nonselection_glyph":{"id":"41821"},"view":{"id":"41824"}},"id":"41823","type":"GlyphRenderer"},{"attributes":{"axis_label":"Quantile","coordinates":null,"formatter":{"id":"41868"},"group":null,"major_label_policy":{"id":"41869"},"ticker":{"id":"41793"}},"id":"41792","type":"LinearAxis"},{"attributes":{},"id":"41754","type":"LinearScale"},{"attributes":{},"id":"41857","type":"Selection"},{"attributes":{"angle":{"value":1.5707963267948966},"line_alpha":{"value":0.35},"marker":{"value":"dash"},"size":{"value":8},"x":{"field":"rug_x"},"y":{"field":"rug_y"}},"id":"41828","type":"Scatter"},{"attributes":{"coordinates":null,"group":null,"line_alpha":0.5,"line_width":0.75,"location":0.1782444431478369},"id":"41826","type":"Span"},{"attributes":{"coordinates":null,"group":null,"text":"tau"},"id":"41832","type":"Title"},{"attributes":{"data":{"x":{"__ndarray__":"mpmZmZmZqT/SjhUII+24P2wor6G8hsI/bolTv+eWyD9w6vfcEqfOP7klTv2eW9I/O1YgjLRj1T+8hvIaymvYPz23xKnfc9s/vueWOPV73j8gjLRjBcLgP2GkHSsQRuI/oryG8hrK4z/i1O+5JU7lPyPtWIEw0uY/YwXCSDtW6D+kHSsQRtrpP+U1lNdQXus/JU79nlvi7D9mZmZmZmbuPw==","dtype":"float64","order":"little","shape":[20]},"y":{"__ndarray__":"bcJe+Pxh3D88Eu5SUq3NPyL+eQAns8s/mzeOVbYJ1z+YvNPsmzTWP87j+UyletE/sIr1s8Bnzz8YN/msnr7PP8gPs0h4ec8/RNGUEkZ90z8g12riYrDUP+AlTxYjYc4/UBTOvdhAzD+AFwpyJ0DOPxDSzcUXbc4/kDNyJsikyj9AY0p3Si3PP8AWdsF70MQ/4I8dAXxLyD+grhW5nZrSPw==","dtype":"float64","order":"little","shape":[20]}},"selected":{"id":"41871"},"selection_policy":{"id":"41870"}},"id":"41834","type":"ColumnDataSource"},{"attributes":{"overlay":{"id":"41773"}},"id":"41768","type":"LassoSelectTool"},{"attributes":{"coordinates":null,"group":null,"line_alpha":0.7,"line_width":1.5,"location":0},"id":"41827","type":"Span"},{"attributes":{"data":{"rug_x":{"__ndarray__":"jQwCEA1Gsz9bBMLb9PjIP1Qd9Zram7E/yuyJRU9bmT/K7IlFT1uZP8rsiUVPW5k/yuyJRU9bmT/K7IlFT1uZP8rsiUVPW5k/yuyJRU9bmT/K7IlFT1uZP8rsiUVPW5k/yuyJRU9bmT/K7IlFT1uZP8rsiUVPW5k/yuyJRU9bmT/zis1V/mKlP/OKzVX+YqU/84rNVf5ipT/zis1V/mKlP/OKzVX+YqU/84rNVf5ipT/zis1V/mKlP/OKzVX+YqU/aF85wG2piz9oXznAbamLP2hfOcBtqYs/aF85wG2piz9oXznAbamLP2hfOcBtqYs/pI3yRkqEyT9c/+ob+nG6P4OiBeyjALU/mx4fY+a33D9wF2c1cbTRPy51Aws2htg/P07TEgOYwz9FOncTGHy5P/BQ+ANPucc/uRO6PYJJzj9CRCWTDYpmP+UvVnGFsrI/8JR71fNwcj8=","dtype":"float64","order":"little","shape":[43]},"rug_y":{"__ndarray__":"AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA=","dtype":"float64","order":"little","shape":[43]}},"selected":{"id":"41859"},"selection_policy":{"id":"41858"}},"id":"41829","type":"ColumnDataSource"},{"attributes":{"coordinates":null,"data_source":{"id":"41829"},"glyph":{"id":"41828"},"group":null,"hover_glyph":null,"view":{"id":"41831"}},"id":"41830","type":"GlyphRenderer"},{"attributes":{},"id":"41797","type":"BasicTicker"},{"attributes":{"end":1,"start":-0.05},"id":"41786","type":"DataRange1d"},{"attributes":{"coordinates":null,"group":null,"text":"mu"},"id":"41847","type":"Title"},{"attributes":{"axis_label":"MCSE for quantiles","coordinates":null,"formatter":{"id":"41865"},"group":null,"major_label_policy":{"id":"41866"},"ticker":{"id":"41797"}},"id":"41796","type":"LinearAxis"},{"attributes":{"source":{"id":"41844"}},"id":"41846","type":"CDSView"},{"attributes":{"toolbars":[{"id":"41774"},{"id":"41810"}],"tools":[{"id":"41764"},{"id":"41765"},{"id":"41766"},{"id":"41767"},{"id":"41768"},{"id":"41769"},{"id":"41770"},{"id":"41771"},{"id":"41800"},{"id":"41801"},{"id":"41802"},{"id":"41803"},{"id":"41804"},{"id":"41805"},{"id":"41806"},{"id":"41807"}]},"id":"41878","type":"ProxyToolbar"},{"attributes":{"axis":{"id":"41756"},"coordinates":null,"group":null,"ticker":null},"id":"41759","type":"Grid"},{"attributes":{},"id":"41788","type":"LinearScale"},{"attributes":{"data":{"rug_x":{"__ndarray__":"fV36E1z/6j89DycBWWfXP73VlTJ7YsE/w8E5M5BGxz/DwTkzkEbHP8PBOTOQRsc/w8E5M5BGxz/DwTkzkEbHP8PBOTOQRsc/w8E5M5BGxz/DwTkzkEbHP8PBOTOQRsc/w8E5M5BGxz/DwTkzkEbHP8PBOTOQRsc/w8E5M5BGxz9P6PYIJnnCP0/o9ggmecI/T+j2CCZ5wj9P6PYIJnnCP0/o9ggmecI/T+j2CCZ5wj9P6PYIJnnCP0/o9ggmecI/txiR/XzQvD+3GJH9fNC8P7cYkf180Lw/txiR/XzQvD+3GJH9fNC8P7cYkf180Lw/Oqay45Jr6D86SHRMZcflP7HThSU1z+I/VdSaCTtd6D9Hvab2ZmSwP8UA5kQ6d4M/0GULqag1oz+aI/Yi4T7rP55DEK8H/NA/qgGd6qjX1D+VqnS/h2ThP/UnuP7VN+Q/TGXHJdeQ2z8=","dtype":"float64","order":"little","shape":[43]},"rug_y":{"__ndarray__":"AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA=","dtype":"float64","order":"little","shape":[43]}},"selected":{"id":"41873"},"selection_policy":{"id":"41872"}},"id":"41844","type":"ColumnDataSource"},{"attributes":{"coordinates":null,"data_source":{"id":"41844"},"glyph":{"id":"41843"},"group":null,"hover_glyph":null,"view":{"id":"41846"}},"id":"41845","type":"GlyphRenderer"},{"attributes":{},"id":"41858","type":"UnionRenderers"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"hatch_alpha":{"value":0.1},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"41821","type":"Circle"},{"attributes":{},"id":"41769","type":"UndoTool"},{"attributes":{},"id":"41790","type":"LinearScale"},{"attributes":{},"id":"41859","type":"Selection"},{"attributes":{"callback":null},"id":"41807","type":"HoverTool"},{"attributes":{"toolbar":{"id":"41878"},"toolbar_location":"above"},"id":"41879","type":"ToolbarBox"},{"attributes":{},"id":"41793","type":"BasicTicker"},{"attributes":{"axis":{"id":"41760"},"coordinates":null,"dimension":1,"group":null,"ticker":null},"id":"41763","type":"Grid"},{"attributes":{"axis":{"id":"41792"},"coordinates":null,"group":null,"ticker":null},"id":"41795","type":"Grid"},{"attributes":{},"id":"41865","type":"BasicTickFormatter"},{"attributes":{},"id":"41784","type":"DataRange1d"},{"attributes":{},"id":"41866","type":"AllLabels"},{"attributes":{"axis":{"id":"41796"},"coordinates":null,"dimension":1,"group":null,"ticker":null},"id":"41799","type":"Grid"},{"attributes":{},"id":"41868","type":"BasicTickFormatter"},{"attributes":{"overlay":{"id":"41772"}},"id":"41766","type":"BoxZoomTool"},{"attributes":{"fill_alpha":{"value":0.2},"fill_color":{"value":"#1f77b4"},"hatch_alpha":{"value":0.2},"line_alpha":{"value":0.2},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"41822","type":"Circle"},{"attributes":{"overlay":{"id":"41808"}},"id":"41802","type":"BoxZoomTool"},{"attributes":{},"id":"41801","type":"PanTool"},{"attributes":{},"id":"41869","type":"AllLabels"},{"attributes":{},"id":"41800","type":"ResetTool"},{"attributes":{},"id":"41765","type":"PanTool"},{"attributes":{},"id":"41806","type":"SaveTool"},{"attributes":{"children":[{"id":"41879"},{"id":"41877"}]},"id":"41880","type":"Column"},{"attributes":{},"id":"41803","type":"WheelZoomTool"},{"attributes":{"coordinates":null,"group":null,"line_alpha":0.5,"line_width":0.75,"location":0.15209716424958658},"id":"41841","type":"Span"},{"attributes":{"overlay":{"id":"41809"}},"id":"41804","type":"LassoSelectTool"},{"attributes":{},"id":"41764","type":"ResetTool"},{"attributes":{},"id":"41805","type":"UndoTool"},{"attributes":{"tools":[{"id":"41800"},{"id":"41801"},{"id":"41802"},{"id":"41803"},{"id":"41804"},{"id":"41805"},{"id":"41806"},{"id":"41807"}]},"id":"41810","type":"Toolbar"},{"attributes":{},"id":"41770","type":"SaveTool"},{"attributes":{},"id":"41870","type":"UnionRenderers"},{"attributes":{"bottom_units":"screen","coordinates":null,"fill_alpha":0.5,"fill_color":"lightgrey","group":null,"left_units":"screen","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"right_units":"screen","syncable":false,"top_units":"screen"},"id":"41808","type":"BoxAnnotation"},{"attributes":{"children":[[{"id":"41747"},0,0],[{"id":"41783"},0,1]]},"id":"41877","type":"GridBox"},{"attributes":{"callback":null},"id":"41771","type":"HoverTool"},{"attributes":{},"id":"41767","type":"WheelZoomTool"},{"attributes":{"coordinates":null,"fill_alpha":0.5,"fill_color":"lightgrey","group":null,"level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"syncable":false,"xs_units":"screen","ys_units":"screen"},"id":"41809","type":"PolyAnnotation"},{"attributes":{},"id":"41871","type":"Selection"},{"attributes":{"data":{"x":{"__ndarray__":"mpmZmZmZqT/SjhUII+24P2wor6G8hsI/bolTv+eWyD9w6vfcEqfOP7klTv2eW9I/O1YgjLRj1T+8hvIaymvYPz23xKnfc9s/vueWOPV73j8gjLRjBcLgP2GkHSsQRuI/oryG8hrK4z/i1O+5JU7lPyPtWIEw0uY/YwXCSDtW6D+kHSsQRtrpP+U1lNdQXus/JU79nlvi7D9mZmZmZmbuPw==","dtype":"float64","order":"little","shape":[20]},"y":{"__ndarray__":"TOY7mm62yD/upazjteTNP/DqXfy8Lcs/HHCIRHVOzT9orzckCyTOP6y8CkfbP8w/iNx/9NF5yz+IfM+LFJ/NPygi8KloJ8w/oK0q3zNVzD/YcLH58jHPP6hWLqhoMNQ/IGaMl5nu0j8AebTCVJLRP+D0hUiIM80/uNpKBpu90z/A00Fq0J3TP2iCFjW8ldY/kLBgWUSo1j8QCPgZgPnXPw==","dtype":"float64","order":"little","shape":[20]}},"selected":{"id":"41857"},"selection_policy":{"id":"41856"}},"id":"41819","type":"ColumnDataSource"},{"attributes":{"source":{"id":"41834"}},"id":"41839","type":"CDSView"},{"attributes":{"below":[{"id":"41792"}],"center":[{"id":"41795"},{"id":"41799"}],"height":500,"left":[{"id":"41796"}],"output_backend":"webgl","renderers":[{"id":"41838"},{"id":"41840"},{"id":"41841"},{"id":"41842"},{"id":"41845"}],"title":{"id":"41847"},"toolbar":{"id":"41810"},"toolbar_location":null,"width":500,"x_range":{"id":"41784"},"x_scale":{"id":"41788"},"y_range":{"id":"41786"},"y_scale":{"id":"41790"}},"id":"41783","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"41761","type":"BasicTicker"},{"attributes":{"fill_alpha":{"value":0.2},"fill_color":{"value":"#1f77b4"},"hatch_alpha":{"value":0.2},"line_alpha":{"value":0.2},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"41837","type":"Circle"},{"attributes":{},"id":"41748","type":"DataRange1d"},{"attributes":{"below":[{"id":"41756"}],"center":[{"id":"41759"},{"id":"41763"}],"height":500,"left":[{"id":"41760"}],"output_backend":"webgl","renderers":[{"id":"41823"},{"id":"41825"},{"id":"41826"},{"id":"41827"},{"id":"41830"}],"title":{"id":"41832"},"toolbar":{"id":"41774"},"toolbar_location":null,"width":500,"x_range":{"id":"41748"},"x_scale":{"id":"41752"},"y_range":{"id":"41750"},"y_scale":{"id":"41754"}},"id":"41747","subtype":"Figure","type":"Plot"},{"attributes":{"tools":[{"id":"41764"},{"id":"41765"},{"id":"41766"},{"id":"41767"},{"id":"41768"},{"id":"41769"},{"id":"41770"},{"id":"41771"}]},"id":"41774","type":"Toolbar"},{"attributes":{"coordinates":null,"group":null,"line_alpha":0.7,"line_width":1.5,"location":0},"id":"41842","type":"Span"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"41820","type":"Circle"},{"attributes":{"bottom_units":"screen","coordinates":null,"fill_alpha":0.5,"fill_color":"lightgrey","group":null,"left_units":"screen","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"right_units":"screen","syncable":false,"top_units":"screen"},"id":"41772","type":"BoxAnnotation"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"hatch_alpha":{"value":0.1},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"41836","type":"Circle"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"41835","type":"Circle"}],"root_ids":["41880"]},"title":"Bokeh Application","version":"2.4.1"}}';
                  const render_items = [{"docid":"df79a4ba-94ad-436e-8db8-bb80c167b892","root_ids":["41880"],"roots":{"41880":"6defc787-9a8b-4854-b788-c5b99d8568ab"}}];
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