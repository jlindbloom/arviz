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
    
      
      
    
      const element = document.getElementById("d8a28180-4101-44f2-94d0-981fb70d39e4");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid 'd8a28180-4101-44f2-94d0-981fb70d39e4' but no matching script tag was found.")
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
                    
                  const docs_json = '{"7144dfd8-6f83-4f6b-a8f7-a46082503dda":{"defs":[],"roots":{"references":[{"attributes":{"coordinates":null,"data_source":{"id":"48131"},"glyph":{"id":"48132"},"group":null,"hover_glyph":null,"muted_glyph":{"id":"48134"},"nonselection_glyph":{"id":"48133"},"view":{"id":"48136"}},"id":"48135","type":"GlyphRenderer"},{"attributes":{"bottom":{"value":2},"fill_alpha":{"value":0.2},"fill_color":{"value":"#328c06"},"hatch_alpha":{"value":0.2},"line_alpha":{"value":0.2},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"48134","type":"VBar"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#2a2eec"},"hatch_alpha":{"value":0.1},"line_alpha":{"value":0.1},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"48119","type":"VBar"},{"attributes":{"data":{"top":{"__ndarray__":"6YVe6IVe4D9nZmZmZmbeP2dmZmZmZu4/WWqlVmql7D/eyI3cyI3YP7vQC73QC9U/uBM7sRM73T+vEzuxEzvdPyZ2Yid2Ytc/lxu5kRu52T8ZuZEbuZHfP5AbuZEbudk/QS/0Qi/04D8LwQ/8wA/cP5AbuZEbudk/q9RKrdRK4z9BL/RCL/TgPyZ2Yid2Ytc/USu1Uiu1wj8=","dtype":"float64","order":"little","shape":[19]},"x":{"__ndarray__":"DeU1lNdQSkDKayivobxjQCivobyGcnBAbCivobwGd0CuobyG8pp9QHkN5TWUF4JAGsprKK9hhUC8hvIayquIQF5DeQ3l9YtAAAAAAABAj0BQXkN5DUWRQKK8hvIa6pJA8hrKayiPlEBDeQ3lNTSWQJTXUF5D2ZdA5DWU11B+mUA2lNdQXiObQIbyGspryJxA2FBeQ3ltnkA=","dtype":"float64","order":"little","shape":[19]}},"selected":{"id":"48173"},"selection_policy":{"id":"48172"}},"id":"48117","type":"ColumnDataSource"},{"attributes":{"bottom":{"value":2},"fill_alpha":{"value":0.1},"fill_color":{"value":"#328c06"},"hatch_alpha":{"value":0.1},"line_alpha":{"value":0.1},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"48133","type":"VBar"},{"attributes":{"below":[{"id":"48024"}],"center":[{"id":"48027"},{"id":"48031"},{"id":"48091"},{"id":"48098"},{"id":"48105"},{"id":"48112"}],"height":331,"left":[{"id":"48028"}],"output_backend":"webgl","renderers":[{"id":"48089"},{"id":"48096"},{"id":"48103"},{"id":"48110"}],"title":{"id":"48115"},"toolbar":{"id":"48042"},"toolbar_location":null,"width":496,"x_range":{"id":"48016"},"x_scale":{"id":"48020"},"y_range":{"id":"48018"},"y_scale":{"id":"48022"}},"id":"48015","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"48167","type":"BasicTickFormatter"},{"attributes":{},"id":"48168","type":"AllLabels"},{"attributes":{},"id":"48170","type":"BasicTickFormatter"},{"attributes":{"ticks":[0,1,2,3]},"id":"48113","type":"FixedTicker"},{"attributes":{},"id":"48171","type":"AllLabels"},{"attributes":{"below":[{"id":"48058"}],"center":[{"id":"48061"},{"id":"48065"},{"id":"48123"},{"id":"48130"},{"id":"48137"},{"id":"48144"}],"height":331,"left":[{"id":"48062"}],"output_backend":"webgl","renderers":[{"id":"48121"},{"id":"48128"},{"id":"48135"},{"id":"48142"}],"title":{"id":"48147"},"toolbar":{"id":"48076"},"toolbar_location":null,"width":496,"x_range":{"id":"48016"},"x_scale":{"id":"48054"},"y_range":{"id":"48018"},"y_scale":{"id":"48056"}},"id":"48051","subtype":"Figure","type":"Plot"},{"attributes":{"children":[[{"id":"48015"},0,0],[{"id":"48051"},0,1]]},"id":"48183","type":"GridBox"},{"attributes":{"callback":null},"id":"48073","type":"HoverTool"},{"attributes":{"bottom":{"value":3},"fill_alpha":{"value":0.1},"fill_color":{"value":"#c10c90"},"hatch_alpha":{"value":0.1},"line_alpha":{"value":0.1},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"48140","type":"VBar"},{"attributes":{},"id":"48056","type":"LinearScale"},{"attributes":{"coordinates":null,"fill_alpha":0.5,"fill_color":"lightgrey","group":null,"level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"syncable":false,"xs_units":"screen","ys_units":"screen"},"id":"48075","type":"PolyAnnotation"},{"attributes":{"bottom":{"value":1},"fill_alpha":{"value":0.1},"fill_color":{"value":"#fa7c17"},"hatch_alpha":{"value":0.1},"line_alpha":{"value":0.1},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"48126","type":"VBar"},{"attributes":{},"id":"48172","type":"UnionRenderers"},{"attributes":{"overlay":{"id":"48041"}},"id":"48036","type":"LassoSelectTool"},{"attributes":{"bottom":{"value":1},"fill_color":{"value":"#fa7c17"},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"48125","type":"VBar"},{"attributes":{},"id":"48173","type":"Selection"},{"attributes":{"source":{"id":"48131"}},"id":"48136","type":"CDSView"},{"attributes":{"bottom_units":"screen","coordinates":null,"fill_alpha":0.5,"fill_color":"lightgrey","group":null,"left_units":"screen","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"right_units":"screen","syncable":false,"top_units":"screen"},"id":"48040","type":"BoxAnnotation"},{"attributes":{"bottom":{"value":1},"fill_alpha":{"value":0.2},"fill_color":{"value":"#fa7c17"},"hatch_alpha":{"value":0.2},"line_alpha":{"value":0.2},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"48127","type":"VBar"},{"attributes":{"source":{"id":"48117"}},"id":"48122","type":"CDSView"},{"attributes":{},"id":"48033","type":"PanTool"},{"attributes":{"toolbars":[{"id":"48042"},{"id":"48076"}],"tools":[{"id":"48032"},{"id":"48033"},{"id":"48034"},{"id":"48035"},{"id":"48036"},{"id":"48037"},{"id":"48038"},{"id":"48039"},{"id":"48066"},{"id":"48067"},{"id":"48068"},{"id":"48069"},{"id":"48070"},{"id":"48071"},{"id":"48072"},{"id":"48073"}]},"id":"48184","type":"ProxyToolbar"},{"attributes":{"overlay":{"id":"48040"}},"id":"48034","type":"BoxZoomTool"},{"attributes":{"source":{"id":"48124"}},"id":"48129","type":"CDSView"},{"attributes":{"bottom":{"value":2},"fill_color":{"value":"#328c06"},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"48132","type":"VBar"},{"attributes":{},"id":"48159","type":"UnionRenderers"},{"attributes":{"data":{"top":{"__ndarray__":"4Qd+4Af+BUDVSq3USq0EQBh6oRd6oQJAGHqhF3qhAkAUO7ETOzECQCu1Uiu10gRAd2IndmKnA0DFTuzETuwCQHIjN3IjNwNAJDdyIzfyA0Bu5EZu5MYCQB/4gR/4gQNAxU7sxE7sAkDTC73QCz0EQNALvdALPQRA0Au90As9BEB6oRd6oRcEQIIf+IEf+ARAhl7ohV5oBUA=","dtype":"float64","order":"little","shape":[19]},"x":{"__ndarray__":"DeU1lNdQSkDKayivobxjQCivobyGcnBAbCivobwGd0CuobyG8pp9QHkN5TWUF4JAGsprKK9hhUC8hvIayquIQF5DeQ3l9YtAAAAAAABAj0BQXkN5DUWRQKK8hvIa6pJA8hrKayiPlEBDeQ3lNTSWQJTXUF5D2ZdA5DWU11B+mUA2lNdQXiObQIbyGspryJxA2FBeQ3ltnkA=","dtype":"float64","order":"little","shape":[19]}},"selected":{"id":"48177"},"selection_policy":{"id":"48176"}},"id":"48131","type":"ColumnDataSource"},{"attributes":{},"id":"48037","type":"UndoTool"},{"attributes":{},"id":"48160","type":"Selection"},{"attributes":{"coordinates":null,"group":null,"line_dash":[6],"location":2.480769230769231},"id":"48137","type":"Span"},{"attributes":{"coordinates":null,"fill_alpha":0.5,"fill_color":"lightgrey","group":null,"level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"syncable":false,"xs_units":"screen","ys_units":"screen"},"id":"48041","type":"PolyAnnotation"},{"attributes":{"fill_alpha":{"value":0.2},"fill_color":{"value":"#2a2eec"},"hatch_alpha":{"value":0.2},"line_alpha":{"value":0.2},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"48088","type":"VBar"},{"attributes":{},"id":"48174","type":"UnionRenderers"},{"attributes":{},"id":"48038","type":"SaveTool"},{"attributes":{},"id":"48175","type":"Selection"},{"attributes":{},"id":"48035","type":"WheelZoomTool"},{"attributes":{},"id":"48150","type":"BasicTickFormatter"},{"attributes":{},"id":"48032","type":"ResetTool"},{"attributes":{},"id":"48022","type":"LinearScale"},{"attributes":{"callback":null},"id":"48039","type":"HoverTool"},{"attributes":{},"id":"48151","type":"AllLabels"},{"attributes":{},"id":"48153","type":"BasicTickFormatter"},{"attributes":{"bottom":{"value":1},"fill_alpha":{"value":0.2},"fill_color":{"value":"#fa7c17"},"hatch_alpha":{"value":0.2},"line_alpha":{"value":0.2},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"48095","type":"VBar"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#2a2eec"},"hatch_alpha":{"value":0.1},"line_alpha":{"value":0.1},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"48087","type":"VBar"},{"attributes":{},"id":"48154","type":"AllLabels"},{"attributes":{"coordinates":null,"group":null,"line_dash":[6],"location":1.4166666666666665},"id":"48098","type":"Span"},{"attributes":{},"id":"48161","type":"UnionRenderers"},{"attributes":{},"id":"48162","type":"Selection"},{"attributes":{"axis":{"id":"48024"},"coordinates":null,"group":null,"ticker":null},"id":"48027","type":"Grid"},{"attributes":{"toolbar":{"id":"48184"},"toolbar_location":"above"},"id":"48185","type":"ToolbarBox"},{"attributes":{"data":{"top":{"__ndarray__":"ZWZmZmZm7j9OG+i0gU7XP2cDnTbQad8/WfKLJb9Y2j9Bpw102kDTP17JL5b8Yt0/PW2g0wY60T9U8oslv1jaP1ws+cWSX9w/WlVVVVVV2T9SVVVVVVXZPzTQaQOdNuA/ZgOdNtBp3z9m8oslv1jaP0h+seQXS9Y/SH6x5BdL1j84baDTBjrRPz+nDXTaQNM/SH6x5BdL1j8=","dtype":"float64","order":"little","shape":[19]},"x":{"__ndarray__":"DeU1lNdQSkDKayivobxjQCivobyGcnBAbCivobwGd0CuobyG8pp9QHkN5TWUF4JAGsprKK9hhUC8hvIayquIQF5DeQ3l9YtAAAAAAABAj0BQXkN5DUWRQKK8hvIa6pJA8hrKayiPlEBDeQ3lNTSWQJTXUF5D2ZdA5DWU11B+mUA2lNdQXiObQIbyGspryJxA2FBeQ3ltnkA=","dtype":"float64","order":"little","shape":[19]}},"selected":{"id":"48156"},"selection_policy":{"id":"48155"}},"id":"48085","type":"ColumnDataSource"},{"attributes":{"coordinates":null,"data_source":{"id":"48085"},"glyph":{"id":"48086"},"group":null,"hover_glyph":null,"muted_glyph":{"id":"48088"},"nonselection_glyph":{"id":"48087"},"view":{"id":"48090"}},"id":"48089","type":"GlyphRenderer"},{"attributes":{"axis":{"id":"48058"},"coordinates":null,"group":null,"ticker":null},"id":"48061","type":"Grid"},{"attributes":{"source":{"id":"48138"}},"id":"48143","type":"CDSView"},{"attributes":{"source":{"id":"48085"}},"id":"48090","type":"CDSView"},{"attributes":{},"id":"48176","type":"UnionRenderers"},{"attributes":{},"id":"48177","type":"Selection"},{"attributes":{"data":{"top":{"__ndarray__":"AAAAAAAA8D8OdNpApw30PxSuR+F6FPY/1AY6baDT9T8c6LSBThv4PxdLfrHkF/c/1QY6baDT9T+V/GLJL5b2P1jyiyW/WPc/43oUrkfh+T8ehetRuB75PxdLfrHkF/c/mJmZmZmZ9z8YrkfhehT2P1RVVVVVVfY/lfxiyS+W9j/gehSuR+H5P5iZmZmZmfc/kl8s+cWS9T8=","dtype":"float64","order":"little","shape":[19]},"x":{"__ndarray__":"DeU1lNdQSkDKayivobxjQCivobyGcnBAbCivobwGd0CuobyG8pp9QHkN5TWUF4JAGsprKK9hhUC8hvIayquIQF5DeQ3l9YtAAAAAAABAj0BQXkN5DUWRQKK8hvIa6pJA8hrKayiPlEBDeQ3lNTSWQJTXUF5D2ZdA5DWU11B+mUA2lNdQXiObQIbyGspryJxA2FBeQ3ltnkA=","dtype":"float64","order":"little","shape":[19]}},"selected":{"id":"48158"},"selection_policy":{"id":"48157"}},"id":"48092","type":"ColumnDataSource"},{"attributes":{"bottom":{"value":1},"fill_alpha":{"value":0.1},"fill_color":{"value":"#fa7c17"},"hatch_alpha":{"value":0.1},"line_alpha":{"value":0.1},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"48094","type":"VBar"},{"attributes":{"coordinates":null,"group":null,"line_dash":[6],"location":1.4807692307692308},"id":"48130","type":"Span"},{"attributes":{"bottom":{"value":3},"fill_color":{"value":"#c10c90"},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"48139","type":"VBar"},{"attributes":{"bottom":{"value":1},"fill_color":{"value":"#fa7c17"},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"48093","type":"VBar"},{"attributes":{"coordinates":null,"data_source":{"id":"48092"},"glyph":{"id":"48093"},"group":null,"hover_glyph":null,"muted_glyph":{"id":"48095"},"nonselection_glyph":{"id":"48094"},"view":{"id":"48097"}},"id":"48096","type":"GlyphRenderer"},{"attributes":{"coordinates":null,"group":null,"line_dash":[6],"location":3.480769230769231},"id":"48144","type":"Span"},{"attributes":{"data":{"top":{"__ndarray__":"P/ADP/AD9z+SG7mRG7n2Py/0Qi/0QvU/eqEXeqEX9D9IbuRGbuT3P4If+IEf+PQ/MPRCL/RC9T+ZmZmZmZn3Pyd2Yid2YvQ/9kIv9EIv+D+4kRu5kRv7P7ATO7ETO/o/oBd6oRd6+D+mF3qhF3r4P1ZqpVZqpfk/9EIv9EIv+D9GbuRGbuT3P07sxE7sxPg/wA/8wA/8+z8=","dtype":"float64","order":"little","shape":[19]},"x":{"__ndarray__":"DeU1lNdQSkDKayivobxjQCivobyGcnBAbCivobwGd0CuobyG8pp9QHkN5TWUF4JAGsprKK9hhUC8hvIayquIQF5DeQ3l9YtAAAAAAABAj0BQXkN5DUWRQKK8hvIa6pJA8hrKayiPlEBDeQ3lNTSWQJTXUF5D2ZdA5DWU11B+mUA2lNdQXiObQIbyGspryJxA2FBeQ3ltnkA=","dtype":"float64","order":"little","shape":[19]}},"selected":{"id":"48175"},"selection_policy":{"id":"48174"}},"id":"48124","type":"ColumnDataSource"},{"attributes":{"data":{"top":{"__ndarray__":"EPzAD/zACUAg+IEf+IELQMEP/MAPfApAdmIndmKnC0A4ciM3ciMOQIZe6IVeaA1Ah17ohV5oDUDYiZ3YiR0NQD7wAz/wAw9Ae6EXeqEXDEAbuZEbuRELQHZiJ3ZipwtAeqEXeqEXDEB0IzdyIzcLQBu5kRu5EQtAFDuxEzsxCkByIzdyIzcLQBu5kRu5EQtAxU7sxE7sCkA=","dtype":"float64","order":"little","shape":[19]},"x":{"__ndarray__":"DeU1lNdQSkDKayivobxjQCivobyGcnBAbCivobwGd0CuobyG8pp9QHkN5TWUF4JAGsprKK9hhUC8hvIayquIQF5DeQ3l9YtAAAAAAABAj0BQXkN5DUWRQKK8hvIa6pJA8hrKayiPlEBDeQ3lNTSWQJTXUF5D2ZdA5DWU11B+mUA2lNdQXiObQIbyGspryJxA2FBeQ3ltnkA=","dtype":"float64","order":"little","shape":[19]}},"selected":{"id":"48179"},"selection_policy":{"id":"48178"}},"id":"48138","type":"ColumnDataSource"},{"attributes":{"fill_alpha":{"value":0.2},"fill_color":{"value":"#2a2eec"},"hatch_alpha":{"value":0.2},"line_alpha":{"value":0.2},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"48120","type":"VBar"},{"attributes":{"children":[{"id":"48185"},{"id":"48183"}]},"id":"48186","type":"Column"},{"attributes":{"coordinates":null,"group":null,"line_dash":[6],"location":2.4166666666666665},"id":"48105","type":"Span"},{"attributes":{},"id":"48066","type":"ResetTool"},{"attributes":{"bottom":{"value":2},"fill_color":{"value":"#328c06"},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"48100","type":"VBar"},{"attributes":{"coordinates":null,"data_source":{"id":"48099"},"glyph":{"id":"48100"},"group":null,"hover_glyph":null,"muted_glyph":{"id":"48102"},"nonselection_glyph":{"id":"48101"},"view":{"id":"48104"}},"id":"48103","type":"GlyphRenderer"},{"attributes":{},"id":"48059","type":"BasicTicker"},{"attributes":{},"id":"48155","type":"UnionRenderers"},{"attributes":{"bottom":{"value":2},"fill_alpha":{"value":0.1},"fill_color":{"value":"#328c06"},"hatch_alpha":{"value":0.1},"line_alpha":{"value":0.1},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"48101","type":"VBar"},{"attributes":{"axis_label":"Chain","coordinates":null,"formatter":{"id":"48150"},"group":null,"major_label_policy":{"id":"48151"},"ticker":{"id":"48113"}},"id":"48028","type":"LinearAxis"},{"attributes":{"coordinates":null,"data_source":{"id":"48124"},"glyph":{"id":"48125"},"group":null,"hover_glyph":null,"muted_glyph":{"id":"48127"},"nonselection_glyph":{"id":"48126"},"view":{"id":"48129"}},"id":"48128","type":"GlyphRenderer"},{"attributes":{"coordinates":null,"data_source":{"id":"48138"},"glyph":{"id":"48139"},"group":null,"hover_glyph":null,"muted_glyph":{"id":"48141"},"nonselection_glyph":{"id":"48140"},"view":{"id":"48143"}},"id":"48142","type":"GlyphRenderer"},{"attributes":{"axis_label":"Rank (all chains)","coordinates":null,"formatter":{"id":"48170"},"group":null,"major_label_overrides":{"0":"0","1":"1","2":"2","3":"3"},"major_label_policy":{"id":"48171"},"ticker":{"id":"48059"}},"id":"48058","type":"LinearAxis"},{"attributes":{"coordinates":null,"group":null,"line_dash":[6],"location":0.48076923076923067},"id":"48123","type":"Span"},{"attributes":{"source":{"id":"48092"}},"id":"48097","type":"CDSView"},{"attributes":{"tools":[{"id":"48032"},{"id":"48033"},{"id":"48034"},{"id":"48035"},{"id":"48036"},{"id":"48037"},{"id":"48038"},{"id":"48039"}]},"id":"48042","type":"Toolbar"},{"attributes":{"axis":{"id":"48028"},"coordinates":null,"dimension":1,"group":null,"ticker":null},"id":"48031","type":"Grid"},{"attributes":{},"id":"48156","type":"Selection"},{"attributes":{},"id":"48054","type":"LinearScale"},{"attributes":{},"id":"48018","type":"DataRange1d"},{"attributes":{"ticks":[0,1,2,3]},"id":"48145","type":"FixedTicker"},{"attributes":{"data":{"top":{"__ndarray__":"AAAAAAAAAECkcD0K1yMBQCa/WPKLpQFA6LSBThtoAkBqA5020OkCQCz5xZJfrANA8O7u7u5uBEDrUbgehWsDQOtRuB6FawNAC9ejcD0KA0BKfrHkF0sDQA102kCnDQRAqqqqqqoqA0BQG+i0gU4EQC+W/GLJrwRAThvotIFOBECuR+F6FC4EQE4b6LSBTgRAcD0K16PwBEA=","dtype":"float64","order":"little","shape":[19]},"x":{"__ndarray__":"DeU1lNdQSkDKayivobxjQCivobyGcnBAbCivobwGd0CuobyG8pp9QHkN5TWUF4JAGsprKK9hhUC8hvIayquIQF5DeQ3l9YtAAAAAAABAj0BQXkN5DUWRQKK8hvIa6pJA8hrKayiPlEBDeQ3lNTSWQJTXUF5D2ZdA5DWU11B+mUA2lNdQXiObQIbyGspryJxA2FBeQ3ltnkA=","dtype":"float64","order":"little","shape":[19]}},"selected":{"id":"48160"},"selection_policy":{"id":"48159"}},"id":"48099","type":"ColumnDataSource"},{"attributes":{"coordinates":null,"group":null,"line_dash":[6],"location":0.41666666666666663},"id":"48091","type":"Span"},{"attributes":{"axis_label":"Chain","coordinates":null,"formatter":{"id":"48167"},"group":null,"major_label_policy":{"id":"48168"},"ticker":{"id":"48145"}},"id":"48062","type":"LinearAxis"},{"attributes":{"bottom":{"value":2},"fill_alpha":{"value":0.2},"fill_color":{"value":"#328c06"},"hatch_alpha":{"value":0.2},"line_alpha":{"value":0.2},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"48102","type":"VBar"},{"attributes":{"coordinates":null,"group":null,"text":"tau"},"id":"48115","type":"Title"},{"attributes":{"coordinates":null,"group":null,"line_dash":[6],"location":3.4166666666666665},"id":"48112","type":"Span"},{"attributes":{},"id":"48178","type":"UnionRenderers"},{"attributes":{"bottom":{"value":3},"fill_color":{"value":"#c10c90"},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"48107","type":"VBar"},{"attributes":{},"id":"48179","type":"Selection"},{"attributes":{"coordinates":null,"data_source":{"id":"48106"},"glyph":{"id":"48107"},"group":null,"hover_glyph":null,"muted_glyph":{"id":"48109"},"nonselection_glyph":{"id":"48108"},"view":{"id":"48111"}},"id":"48110","type":"GlyphRenderer"},{"attributes":{"bottom":{"value":3},"fill_alpha":{"value":0.2},"fill_color":{"value":"#c10c90"},"hatch_alpha":{"value":0.2},"line_alpha":{"value":0.2},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"48141","type":"VBar"},{"attributes":{"axis_label":"Rank (all chains)","coordinates":null,"formatter":{"id":"48153"},"group":null,"major_label_overrides":{"0":"0","1":"1","2":"2","3":"3"},"major_label_policy":{"id":"48154"},"ticker":{"id":"48025"}},"id":"48024","type":"LinearAxis"},{"attributes":{"axis":{"id":"48062"},"coordinates":null,"dimension":1,"group":null,"ticker":null},"id":"48065","type":"Grid"},{"attributes":{"bottom":{"value":3},"fill_alpha":{"value":0.1},"fill_color":{"value":"#c10c90"},"hatch_alpha":{"value":0.1},"line_alpha":{"value":0.1},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"48108","type":"VBar"},{"attributes":{"coordinates":null,"group":null,"text":"mu"},"id":"48147","type":"Title"},{"attributes":{"source":{"id":"48099"}},"id":"48104","type":"CDSView"},{"attributes":{},"id":"48016","type":"DataRange1d"},{"attributes":{"fill_color":{"value":"#2a2eec"},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"48086","type":"VBar"},{"attributes":{"data":{"top":{"__ndarray__":"MzMzMzOzDUC4HoXrUTgPQDCW/GLJrwxA0GkDnTbQDEBtoNMGOu0LQOi0gU4baApAzszMzMzMC0DrUbgehWsLQClcj8L1qApAqA102kAnCkBH4XoUrkcKQMaSXyz5xQlA6LSBThtoCkAqXI/C9agKQClcj8L1qApACtejcD0KC0AGOm2g0wYKQMkvlvxiyQpAaQOdNtDpCkA=","dtype":"float64","order":"little","shape":[19]},"x":{"__ndarray__":"DeU1lNdQSkDKayivobxjQCivobyGcnBAbCivobwGd0CuobyG8pp9QHkN5TWUF4JAGsprKK9hhUC8hvIayquIQF5DeQ3l9YtAAAAAAABAj0BQXkN5DUWRQKK8hvIa6pJA8hrKayiPlEBDeQ3lNTSWQJTXUF5D2ZdA5DWU11B+mUA2lNdQXiObQIbyGspryJxA2FBeQ3ltnkA=","dtype":"float64","order":"little","shape":[19]}},"selected":{"id":"48162"},"selection_policy":{"id":"48161"}},"id":"48106","type":"ColumnDataSource"},{"attributes":{"overlay":{"id":"48074"}},"id":"48068","type":"BoxZoomTool"},{"attributes":{"bottom":{"value":3},"fill_alpha":{"value":0.2},"fill_color":{"value":"#c10c90"},"hatch_alpha":{"value":0.2},"line_alpha":{"value":0.2},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"48109","type":"VBar"},{"attributes":{},"id":"48025","type":"BasicTicker"},{"attributes":{},"id":"48067","type":"PanTool"},{"attributes":{},"id":"48020","type":"LinearScale"},{"attributes":{"coordinates":null,"data_source":{"id":"48117"},"glyph":{"id":"48118"},"group":null,"hover_glyph":null,"muted_glyph":{"id":"48120"},"nonselection_glyph":{"id":"48119"},"view":{"id":"48122"}},"id":"48121","type":"GlyphRenderer"},{"attributes":{"tools":[{"id":"48066"},{"id":"48067"},{"id":"48068"},{"id":"48069"},{"id":"48070"},{"id":"48071"},{"id":"48072"},{"id":"48073"}]},"id":"48076","type":"Toolbar"},{"attributes":{"fill_color":{"value":"#2a2eec"},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"48118","type":"VBar"},{"attributes":{"bottom_units":"screen","coordinates":null,"fill_alpha":0.5,"fill_color":"lightgrey","group":null,"left_units":"screen","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"right_units":"screen","syncable":false,"top_units":"screen"},"id":"48074","type":"BoxAnnotation"},{"attributes":{},"id":"48072","type":"SaveTool"},{"attributes":{},"id":"48069","type":"WheelZoomTool"},{"attributes":{"source":{"id":"48106"}},"id":"48111","type":"CDSView"},{"attributes":{},"id":"48157","type":"UnionRenderers"},{"attributes":{"overlay":{"id":"48075"}},"id":"48070","type":"LassoSelectTool"},{"attributes":{},"id":"48071","type":"UndoTool"},{"attributes":{},"id":"48158","type":"Selection"}],"root_ids":["48186"]},"title":"Bokeh Application","version":"2.4.1"}}';
                  const render_items = [{"docid":"7144dfd8-6f83-4f6b-a8f7-a46082503dda","root_ids":["48186"],"roots":{"48186":"d8a28180-4101-44f2-94d0-981fb70d39e4"}}];
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