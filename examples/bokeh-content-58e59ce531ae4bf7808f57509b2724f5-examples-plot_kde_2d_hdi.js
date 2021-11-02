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
    
      
      
    
      const element = document.getElementById("4b9769c4-ff22-48a1-8c25-d94c1abc91cd");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid '4b9769c4-ff22-48a1-8c25-d94c1abc91cd' but no matching script tag was found.")
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
                    
                  const docs_json = '{"b400dea1-9245-4e9b-a758-c9192b6dbecf":{"defs":[],"roots":{"references":[{"attributes":{"callback":null},"id":"23826","type":"HoverTool"},{"attributes":{"source":{"id":"23850"}},"id":"23855","type":"CDSView"},{"attributes":{"fill_alpha":0.2,"fill_color":"#94c4df","hatch_alpha":0.2,"line_alpha":0.2,"line_color":"#94c4df","x":{"field":"x"},"y":{"field":"y"}},"id":"23841","type":"Patch"},{"attributes":{"fill_alpha":0.1,"fill_color":"#1764ab","hatch_alpha":0.1,"line_alpha":0.1,"line_color":"#1764ab","x":{"field":"x"},"y":{"field":"y"}},"id":"23852","type":"Patch"},{"attributes":{},"id":"23861","type":"BasicTickFormatter"},{"attributes":{"fill_alpha":0.1,"fill_color":"#94c4df","hatch_alpha":0.1,"line_alpha":0.1,"line_color":"#94c4df","x":{"field":"x"},"y":{"field":"y"}},"id":"23840","type":"Patch"},{"attributes":{"coordinates":null,"data_source":{"id":"23844"},"glyph":{"id":"23845"},"group":null,"hover_glyph":null,"muted_glyph":{"id":"23847"},"nonselection_glyph":{"id":"23846"},"view":{"id":"23849"}},"id":"23848","type":"GlyphRenderer"},{"attributes":{"source":{"id":"23838"}},"id":"23843","type":"CDSView"},{"attributes":{},"id":"23812","type":"BasicTicker"},{"attributes":{},"id":"23825","type":"SaveTool"},{"attributes":{},"id":"23824","type":"UndoTool"},{"attributes":{"fill_color":"#94c4df","line_alpha":0.25,"line_color":"#94c4df","x":{"field":"x"},"y":{"field":"y"}},"id":"23839","type":"Patch"},{"attributes":{},"id":"23809","type":"LinearScale"},{"attributes":{"coordinates":null,"formatter":{"id":"23861"},"group":null,"major_label_policy":{"id":"23862"},"ticker":{"id":"23816"}},"id":"23815","type":"LinearAxis"},{"attributes":{"axis":{"id":"23815"},"coordinates":null,"dimension":1,"grid_line_color":null,"group":null,"ticker":null},"id":"23818","type":"Grid"},{"attributes":{},"id":"23865","type":"AllLabels"},{"attributes":{},"id":"23870","type":"UnionRenderers"},{"attributes":{"below":[{"id":"23811"}],"center":[{"id":"23814"},{"id":"23818"}],"height":500,"left":[{"id":"23815"}],"output_backend":"webgl","renderers":[{"id":"23842"},{"id":"23848"},{"id":"23854"}],"title":{"id":"23858"},"toolbar":{"id":"23829"},"toolbar_location":null,"width":500,"x_range":{"id":"23856"},"x_scale":{"id":"23807"},"y_range":{"id":"23857"},"y_scale":{"id":"23809"}},"id":"23802","subtype":"Figure","type":"Plot"},{"attributes":{"tools":[{"id":"23819"},{"id":"23820"},{"id":"23821"},{"id":"23822"},{"id":"23823"},{"id":"23824"},{"id":"23825"},{"id":"23826"}]},"id":"23829","type":"Toolbar"},{"attributes":{"coordinates":null,"data_source":{"id":"23850"},"glyph":{"id":"23851"},"group":null,"hover_glyph":null,"muted_glyph":{"id":"23853"},"nonselection_glyph":{"id":"23852"},"view":{"id":"23855"}},"id":"23854","type":"GlyphRenderer"},{"attributes":{},"id":"23871","type":"Selection"},{"attributes":{},"id":"23864","type":"BasicTickFormatter"},{"attributes":{"fill_alpha":0.2,"fill_color":"#4a98c9","hatch_alpha":0.2,"line_alpha":0.2,"line_color":"#4a98c9","x":{"field":"x"},"y":{"field":"y"}},"id":"23847","type":"Patch"},{"attributes":{"overlay":{"id":"23827"}},"id":"23821","type":"BoxZoomTool"},{"attributes":{"fill_color":"#4a98c9","line_alpha":0.25,"line_color":"#4a98c9","x":{"field":"x"},"y":{"field":"y"}},"id":"23845","type":"Patch"},{"attributes":{"fill_alpha":0.1,"fill_color":"#4a98c9","hatch_alpha":0.1,"line_alpha":0.1,"line_color":"#4a98c9","x":{"field":"x"},"y":{"field":"y"}},"id":"23846","type":"Patch"},{"attributes":{"children":[[{"id":"23802"},0,0]]},"id":"23875","type":"GridBox"},{"attributes":{},"id":"23868","type":"UnionRenderers"},{"attributes":{},"id":"23816","type":"BasicTicker"},{"attributes":{},"id":"23867","type":"Selection"},{"attributes":{"fill_alpha":0.2,"fill_color":"#1764ab","hatch_alpha":0.2,"line_alpha":0.2,"line_color":"#1764ab","x":{"field":"x"},"y":{"field":"y"}},"id":"23853","type":"Patch"},{"attributes":{"data":{"x":{"__ndarray__":"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","dtype":"float64","order":"little","shape":[504]},"y":{"__ndarray__":"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","dtype":"float64","order":"little","shape":[504]}},"selected":{"id":"23867"},"selection_policy":{"id":"23866"}},"id":"23838","type":"ColumnDataSource"},{"attributes":{"coordinates":null,"data_source":{"id":"23838"},"glyph":{"id":"23839"},"group":null,"hover_glyph":null,"muted_glyph":{"id":"23841"},"nonselection_glyph":{"id":"23840"},"view":{"id":"23843"}},"id":"23842","type":"GlyphRenderer"},{"attributes":{"toolbar":{"id":"23876"},"toolbar_location":"above"},"id":"23877","type":"ToolbarBox"},{"attributes":{},"id":"23822","type":"WheelZoomTool"},{"attributes":{},"id":"23869","type":"Selection"},{"attributes":{"overlay":{"id":"23828"}},"id":"23823","type":"LassoSelectTool"},{"attributes":{"coordinates":null,"formatter":{"id":"23864"},"group":null,"major_label_policy":{"id":"23865"},"ticker":{"id":"23812"}},"id":"23811","type":"LinearAxis"},{"attributes":{"data":{"x":{"__ndarray__":"4h7rZ6Rv8D9qmIk8r3nwP8SizL1LqPA/qIVFGr238D8/uELlv/vwP8aIaMeVPvE/rqXfiQmF8T8LWIG3IuTxP8AAk/Sb9fE/pXbp1Kx28j9gVaUZGy7zP7xeWSvsQvM/SPJrT0QA9D+4vB9iPJD0P8J7ymAv5vQ/tBrmmIzd9T/LvoeRPd71P9TOcWdt4vY/sXisz9wq9z/gcZfWAvL3P6zWcgYtePg/9worB2AZ+T+oNDk9fcX5PzD54sa4evo/pJL/c80S+z+g8MWqHWD8P4P11m+yZ/w/nE6M4W2t/T8VCkgr7s/+P5isUhi++v4/SoWMJwckAEBItO9Cr8oAQJO/troXzABARuNSXldxAUBEErZ5/xcCQJDTbfqKhAJAQkEZlae+AkBAcHywT2UDQD6f38v3CwRAPM5C55+yBEAdFS+zrQcFQDr9pQJIWQVAOCwJHvD/BUBQWFsZMJIGQDZbbDmYpgZANYrPVEBNB0AsbtZUOFkHQHKcjF4fywdAMrkycOjzB0A1eOfFYhMIQLweaBfRPAhA/nadpORUCEAlsvnVHlkIQKphqjesTwhAxh5heok9CEAKXwRUQiIIQDK5MnDo8wdA+AVekfbyB0Att9Jro6UHQDSKz1RATQdAkLbE0tVFB0Cu0/obieMGQDZbbDmYpgZA8v3wRXmOBkBmvmjiIzsGQDgsCR7w/wVAIh82623UBUA6/aUCSFkFQOC6x1sgTwVAPM5C55+yBEC4h5O0V6sEQD6f38v3CwRArk8AIlf4A0BAcHywT2UDQOOamJPtOQNAQkEZlae+AkBAF6jke0sCQEQStnn/FwJARuNSXldxAUC4ckXLDCcBQEi070KvygBASoWMJwckAEAAZCZ5Afj/P5isUhi++v4/nE6M4W2t/T+g8MWqHWD8P/K4M1oEFPs/pJL/c80S+z+oNDk9fcX5P6zWcgYtePg//PrZa0Vs+D+weKzP3Cr3P7Qa5piM3fU/xd9MubW69D+4vB9iPJD0P7xeWSvsQvM//F6PGPcf8j/AAJP0m/XxP3YclGbaPfE/9+jYKye38D/Eosy9S6jwP+Ie62ekb/A/","dtype":"float64","order":"little","shape":[102]},"y":{"__ndarray__":"rEXxMhoL+T9cuYBHlDD6P+wcAxaPCPs/DC0QXA5W+z+4oJ9wiHv8P2gUL4UCof0/FIi+mXzG/j/E+02u9uv/PyH5VMsQBwBAurduYbiIAECQcbZrdRsBQDlXOQOOKgFAaCv+dTKuAUBgMivSNwsCQD7lRYDvQAJAE5tVRkbTAkAWn42KrNMCQO5Y1ZRpZgNATHxCrdGPA0DEEh2fJvkDQMoyH6lPPgRAnMxkqeOLBEC2obSXyNgEQHSGrLOgHgVAMS00qQtUBUCxN+6Gb68FQEpA9L1dsQVAxDmqkZ8BBkAj+jvIGkQGQMSTndTlTQZAKiXeSjqUBkDFIAM7UdYGQPqzg9LX1gZAMBHtlYAWB0AjGy/bJU4HQNBty9yUaQdArbs7f2J4B0C0kWCI3YsHQMycEILLjAdA+Dr033l9B0DQbcvclGkHQCI3Q252UwdAakLphm4VB0D6s4PS19YGQNjYIcSaywZAJVjn8zNPBkAi+jvIGkQGQEpA9L1dsQVAGvCgS4JoBUB0hqyzoB4FQJzMZKnjiwRAxBIdnyb5A0DuWNWUaWYDQBafjYqs0wJAPuVFgO9AAkBoK/51Mq4BQEgGP+JJHgFAkHG2a3UbAUC6t25huIgAQPGQLVkoAQBAxPtNrvbr/z8UiL6ZfMb+PxjE2Huf9v0/aBQvhQKh/T+4oJ9wiHv8P4q1sYKvzfs/DC0QXA5W+z/yZkzJvUX6P1y5gEeUMPo/w/hV+I8X+T+sRfEyGgv5P9RKW4y5BPg/ANJhHqDl9z+ItOvJbv72P1Be0gkmwPY/Jj7SffwZ9j+i6kL1q5r1P/Q+wctaYPU/0bTsjn699D/0drPgMXX0P1HMnrjyFPQ/GjH50DJx8z9EAyTMt0/zP/h/sEew6vI/voIBblCI8j+iwmG+rk/yP5ePlLc9KvI/O6IxbBkq8j+f/+ccCQzyP+LS0q9/J/I/lo+Utz0q8j8AOhXxD3jyP1QX6e/C1fI/RAMkzLdP8z+JAtAdJGnzP/R2s+AxdfQ/oupC9aua9T9isVqLDMf1P1Be0gkmwPY/ANJhHqDl9z+1ija+/x34P6xF8TIaC/k/","dtype":"float64","order":"little","shape":[102]}},"selected":{"id":"23871"},"selection_policy":{"id":"23870"}},"id":"23850","type":"ColumnDataSource"},{"attributes":{"fill_color":"#1764ab","line_alpha":0.25,"line_color":"#1764ab","x":{"field":"x"},"y":{"field":"y"}},"id":"23851","type":"Patch"},{"attributes":{"end":6.509034863141307,"start":-2.590467890941901},"id":"23857","type":"Range1d"},{"attributes":{"end":6.8187360123367675,"start":-3.5159304052347347},"id":"23856","type":"Range1d"},{"attributes":{"bottom_units":"screen","coordinates":null,"fill_alpha":0.5,"fill_color":"lightgrey","group":null,"left_units":"screen","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"right_units":"screen","syncable":false,"top_units":"screen"},"id":"23827","type":"BoxAnnotation"},{"attributes":{"coordinates":null,"fill_alpha":0.5,"fill_color":"lightgrey","group":null,"level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"syncable":false,"xs_units":"screen","ys_units":"screen"},"id":"23828","type":"PolyAnnotation"},{"attributes":{"axis":{"id":"23811"},"coordinates":null,"grid_line_color":null,"group":null,"ticker":null},"id":"23814","type":"Grid"},{"attributes":{"source":{"id":"23844"}},"id":"23849","type":"CDSView"},{"attributes":{},"id":"23820","type":"PanTool"},{"attributes":{"children":[{"id":"23877"},{"id":"23875"}]},"id":"23878","type":"Column"},{"attributes":{},"id":"23819","type":"ResetTool"},{"attributes":{},"id":"23807","type":"LinearScale"},{"attributes":{},"id":"23862","type":"AllLabels"},{"attributes":{},"id":"23866","type":"UnionRenderers"},{"attributes":{"data":{"x":{"__ndarray__":"S5R5uRc7qz8xpNoMJjGmP40pElFkFKA/YtfYG1eBlT/h0zXI92KNP9FJ6IVpkIY/tTh+HIPbkj8CNtI8bNGjP5+LbVAfEq8/IK8DyJKIsD9CgYetiJSzPxYXYUNDq7g//KXo8CdAwD9wxzQay67CP25p3pqKscQ/NJq8R0F5yD+V8G01Z0vMP1C3Z9BMGc0/7PAfM0dJ0D8vCnQYwrfSP5hTTUPnwdM/0mFswFM91T8bjWtyYUPYP4jLZh4o99g/NrNDd4132z94Q4D5aCzeP9yzS0jKtt4/5Yiswc7l4D+43Uzq1LDhP7E99PSJj+I/sJnZV3VL5D/TJzAE6xTmP6hVZsUV5uY/IGIvueY26D+gEfMytoDpPyj+5hjujeo/mM1/oFYb7D8EClxlEBrtP5CJDA73te4/Eo5xoUr47z/Eosy9S6jwPwvJ8ij2afE/wACT9Jv18T//l8XaCsXyP7xeWSvsQvM/cG9waaRD9D+4vB9iPJD0P7Qa5piM3fU/WZIe+N3w9T+weKzP3Cr3P+bYx8AD2vc/rNZyBi14+D+oNDk9fcX5Py1Y0/z/2fk/pJL/c80S+z8zzcZlCP77P6DwxaodYPw/nE6M4W2t/T9r63pm4f79P5isUhi++v4/SoWMJwckAEDWVODNejwAQEi070KvygBARuNSXldxAUBEErZ5/xcCQCsaUp7yHwJAQkEZlae+AkBAcHywT2UDQD6f38v3CwRAzGVDUgRXBEA9zkLnn7IEQDr9pQJIWQVAOCwJHvD/BUA2W2w5mKYGQDSKz1RATQdAMrkycOjzB0Ay6JWLkJoIQDAX+aY4QQlALkZcwuDnCUAsdb/diI4KQB7rh/OBzQpAKqQi+TA1C0Ap04UU2dsLQGoQ8eOUSgxAJgLpL4GCDEAkMUxLKSkNQK/2VeRUNw1AImCvZtHPDUCFsdaL2gUOQCCPEoJ5dg5A3pj8kWWSDkDQdvt55gMPQB6+dZ0hHQ9AylX5/opuD0ATlBCw3LcPQBzt2LjJww9AMhU0ip/iD0CezNDZngUQQGzQ//GQGxBA2DdQzN8qEEAxEJNfsjQQQA0OHuo4NRBAZGaUqEA7EEAthgJlmzoQQA0OHuo4NRBALQhz8ckxEEC93qxqmiUQQKGPlX0ZFRBAnEl4JtP4D0Ac7di4ycMPQJbwSdsrwA9AMMEbBZeZD0AOzdZtfnkPQPURQNLIVw9AU/cjpuYlD0AevnWdIR0PQAYDHiTG4w5A4edf8XaVDkAgjxKCeXYOQKsoBNk+Sw5ArTA85K77DUAiYK9m0c8NQBGkIXl3pQ1A3NlP8B1EDUAlMUxLKSkNQDQpwzp12QxAJgLpL4GCDEA90jYO+2wMQO9ozG3fAwxAJ9OFFNnbC0B/8gAT8IkLQCqkIvkwNQtAS1rG2+n4CkAsdb/diI4KQKi5ZeH0WQpALkZcwuDnCUDYehf2E8QJQDAX+aY4QQlAE7jC1f02CUAy6JWLkJoIQLafO7temghAMrkycOjzB0BpGQE9uOkHQDSKz1RATQdAKA3nPW4sB0A2W2w5mKYGQChSos0QZwZAOCwJHvD/BUBNjEXGRLIFQDr9pQJIWQVARH2MKpftBEA8zkLnn7IEQD6f38v3CwRAs07ySxfaA0BAcHywT2UDQEJBGZWnvgJAqP+1PHmXAkBEErZ5/xcCQEbjUl5XcQFAL2ZAuk5uAUBItO9Cr8oAQL59n55xOQBASoWMJwckAECYrFIYvvr+P5xOjOFtrf0/52WXK2uT/T+g8MWqHWD8P6SS/3PNEvs/qDQ5PX3F+T91RXglHEn5P6zWcgYtePg/sHisz9wq9z+0GuaYjN31P7i8H2I8kPQ/vF5ZK+xC8z/AAJP0m/XxP8SizL1LqPA/j4kMDve17j+YzX+gVhvsP4YXLyG/qeo/oBHzMraA6T+oVWbFFebmP7CZ2Vd1S+Q//iwe9ANC4z+43Uzq1LDhP3hDgPloLN4//nwsTE0G3T+Iy2YeKPfYP4r8uGz5gtU/mFNNQ+fB0z+qgG8DcDrPP1C3Z9BMGc0/7F+UTBPpxz9egFxZIAvDP3DHNBrLrsI/BGlREFmkvz/kSQ3c7hi4P5oCzmcFOLE/IK8DyJKIsD9LlHm5FzurP8SizL1LqPA/9+jYKye38D92HJRm2j3xP8AAk/Sb9fE//V6PGPcf8j+8Xlkr7ELzP7i8H2I8kPQ/xd9MubW69D+0GuaYjN31P7F4rM/cKvc//PrZa0Vs+D+s1nIGLXj4P6g0OT19xfk/pJL/c80S+z/yuDNaBBT7P6DwxaodYPw/nE6M4W2t/T+YrFIYvvr+PwBkJnkB+P8/SoWMJwckAEBItO9Cr8oAQLhyRcsMJwFARuNSXldxAUBEErZ5/xcCQEAXqOR7SwJAQkEZlae+AkDjmpiT7TkDQEBwfLBPZQNArk8AIlf4A0A+n9/L9wsEQLiHk7RXqwRAPM5C55+yBEDgusdbIE8FQDr9pQJIWQVAIh82623UBUA4LAke8P8FQGa+aOIjOwZA8v3wRXmOBkA2W2w5mKYGQK7T+huJ4wZAkLbE0tVFB0A0is9UQE0HQC230mujpQdA9wVekfbyB0AzuTJw6PMHQApfBFRCIghAxR5heok9CECrYao3rE8IQCWy+dUeWQhA/nadpORUCEC8HmgX0TwIQDV458ViEwhAMrkycOjzB0BynIxeH8sHQCxu1lQ4WQdANIrPVEBNB0A2W2w5mKYGQFBYWxkwkgZAOCwJHvD/BUA6/aUCSFkFQB4VL7OtBwVAPM5C55+yBEA+n9/L9wsEQEBwfLBPZQNAQkEZlae+AkCQ0236ioQCQEQStnn/FwJARuNSXldxAUCTv7a6F8wAQEi070KvygBASoWMJwckAECYrFIYvvr+PxQKSCvuz/4/nE6M4W2t/T+D9dZvsmf8P6DwxaodYPw/pJL/c80S+z8w+eLGuHr6P6g0OT19xfk/9worB2AZ+T+s1nIGLXj4P+Bxl9YC8vc/sHisz9wq9z/UznFnbeL2P8u+h5E93vU/tBrmmIzd9T/Ce8pgL+b0P7i8H2I8kPQ/SPJrT0QA9D+8Xlkr7ELzP2BVpRkbLvM/pXbp1Kx28j/AAJP0m/XxPwtYgbci5PE/r6XfiQmF8T/GiGjHlT7xPz+4QuW/+/A/qIVFGr238D/Eosy9S6jwP2qYiTyvefA/4h7rZ6Rv8D/Eosy9S6jwPw==","dtype":"float64","order":"little","shape":[302]},"y":{"__ndarray__":"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","dtype":"float64","order":"little","shape":[302]}},"selected":{"id":"23869"},"selection_policy":{"id":"23868"}},"id":"23844","type":"ColumnDataSource"},{"attributes":{"toolbars":[{"id":"23829"}],"tools":[{"id":"23819"},{"id":"23820"},{"id":"23821"},{"id":"23822"},{"id":"23823"},{"id":"23824"},{"id":"23825"},{"id":"23826"}]},"id":"23876","type":"ProxyToolbar"},{"attributes":{"coordinates":null,"group":null},"id":"23858","type":"Title"}],"root_ids":["23878"]},"title":"Bokeh Application","version":"2.4.1"}}';
                  const render_items = [{"docid":"b400dea1-9245-4e9b-a758-c9192b6dbecf","root_ids":["23878"],"roots":{"23878":"4b9769c4-ff22-48a1-8c25-d94c1abc91cd"}}];
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