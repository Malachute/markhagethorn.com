KudosPlease = (function () {
  var a = document.documentElement.classList,
    p = !!a,
    e = function (r, q) {
      return p
        ? function (s, t) {
            if (t != "") {
              return s.classList[r](t);
            }
          }
        : q;
    },
    g = e("add", function (s, r) {
      r = r.split(",");
      for (var q = 0; q < r.length; q++) {
        if (s.className.indexOf(r[q]) == -1) {
          s.className = s.className.trim() + " " + r[q];
        }
      }
    }),
    o = e("remove", function (s, r) {
      r = r.split(",");
      for (var q = 0; q < r.length; q++) {
        s.className = s.className.replace(r[q], "").trim();
      }
    }),
    d = e("contains", function (u, t) {
      var s = u.className.split(" "),
        q = false;
      for (var r = 0; r < s.length; r++) {
        if (s[r] == t) {
          q = true;
        }
      }
      return q;
    }),
    h = function (q, r, s) {
      if (s.status != undefined) {
        if (q.getAttribute("data-status") != undefined) {
          o(q, s.status[q.getAttribute("data-status")]);
        }
        g(q, s.status[r]);
        q.setAttribute("data-status", r);
      }
    },
    n = function (q, s, r) {
      g(q, "finish");
      h(q, "gamma", r);
      s = s || false;
      amount = l(parseInt(q.getAttribute("data-id"), 10), r);
      if (s) {
        ++amount;
        b(q, "POST", r);
      }
    },
    j = function (r, q, t) {
      var s = -1;
      if (!d(q, "finish")) {
        g(q, "active");
        s = setTimeout(function () {
          o(q, "active");
          n(q, true, t);
        }, t.duration);
        t.timer[q.getAttribute("data-id")] = s;
      }
    },
    m = function (r, q, s) {
      if (r.touches.length === 1) {
        r.stopPropagation();
        r.preventDefault();
        j(r, q, s);
      }
    },
    c = function (r, q, s) {
      if (!d(q, "finish")) {
        o(q, "active");
        clearTimeout(s.timer[q.getAttribute("data-id")]);
      }
    },
    f = function (q, s, r, u) {
      try {
        q.addEventListener(
          s,
          function (v) {
            r(v, q, u);
          },
          false
        );
      } catch (t) {
        q.attachEvent("on" + s, function (v) {
          r(v, q, u);
        });
      }
    },
    i = function (r, q, s) {
      if (s.persistent) {
        window.localStorage.setItem(
          "kudos:saved:" + r.getAttribute("data-url"),
          q
        );
      }
    },
    l = function (s, r) {
      var q = r.elements[s].getAttribute("data-amount") || 0;
      if (r.persistent) {
        if (
          (amount = window.localStorage.getItem(
            "kudos:saved:" + r.elements[s].getAttribute("data-url")
          )) != undefined
        ) {
          q = amount;
        }
      }
      return q;
    },
    b = function (s, r, v) {
      var u;
      try {
        u = new ActiveXObject("Microsoft.XMLHTTP");
      } catch (t) {
        u = new XMLHttpRequest();
      }
      u.onreadystatechange = function () {
        if (u.readyState == 4 && u.status == 200) {
          var w = u.responseText;
          s.setAttribute("data-amount", w);
          if (r == "GET") {
            h(s, w == 0 ? "alpha" : "beta", v);
            if (
              v.persistent &&
              window.localStorage.getItem(
                "kudos:saved:" + s.getAttribute("data-url")
              ) != null
            ) {
              h(s, "gamma", v);
            }
          }
          if (r == "POST") {
            i(s, w, v);
          }
        }
      };
      var q = "?url=" + encodeURIComponent(s.getAttribute("data-url"));
      u.open(r, "http://api.kudosplease.com/" + q, true);
      u.send();
    };
  function k(q) {
    this.elements = document.querySelectorAll(q.el);
    this.status = q.status;
    this.persistent =
      q.persistent != undefined
        ? q.persistent && window.localStorage != undefined
        : true;
    this.duration = q.duration;
    this.timer = {};
    for (var r = 0; r < this.elements.length; r++) {
      var s = this.elements[r];
      s.setAttribute("data-id", r);
      b(s, "GET", this);
      if (l(r, this) == 0) {
        s.setAttribute("data-amount", 0);
        this.timer[r] = -1;
        f(s, "touchstart", m, this);
        f(s, "touchend", c, this);
        f(s, "mouseover", j, this);
        f(s, "mouseout", c, this);
      } else {
        n(s, false, this);
      }
    }
    return this;
  }
  "".trim ||
    (String.prototype.trim = function () {
      return this.replace(/^\s+|\s+$/g, "");
    });
  return k;
})();
