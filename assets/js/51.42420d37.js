(window.webpackJsonp=window.webpackJsonp||[]).push([[51],{428:function(t,e,s){"use strict";s.r(e);var o=s(11),r=Object(o.a)({},(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"dns"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#dns"}},[t._v("#")]),t._v(" DNS")]),t._v(" "),s("ul",[s("li",[t._v("Name: "),s("code",[t._v("dns")])]),t._v(" "),s("li",[t._v("Type: Outbound Protocol")])]),t._v(" "),s("p",[t._v("DNS is an outbound protocol, mainly used to intercept and forward DNS queries. This outbound protocol can only receive DNS traffic (including queries based on UDP and TCP protocols), and other types of traffic will cause errors.")]),t._v(" "),s("p",[t._v("When processing DNS queries, this outbound protocol will forward IP queries (ie A and AAAA) to the built-in [DNS server] (../dns.md). Other types of query traffic will be forwarded to their original destination address.")]),t._v(" "),s("p",[t._v("DNS outbound protocol was introduced in V2Ray 4.15.")]),t._v(" "),s("h2",{attrs:{id:"outboundconfigurationobject"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#outboundconfigurationobject"}},[t._v("#")]),t._v(" OutboundConfigurationObject")]),t._v(" "),s("div",{staticClass:"language-json extra-class"},[s("pre",{pre:!0,attrs:{class:"language-json"}},[s("code",[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"network"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"tcp"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"address"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"1.1.1.1"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"port"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("53")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("blockquote",[s("p",[s("code",[t._v("network")]),t._v(': "tcp" | "udp"')])]),t._v(" "),s("p",[t._v("(V2Ray 4.16+) Modify the transport layer protocol of DNS traffic. The optional values are "),s("code",[t._v('"tcp"')]),t._v(" and "),s("code",[t._v('"udp"')]),t._v(". When not specified, the transmission mode of the source remains unchanged.")]),t._v(" "),s("blockquote",[s("p",[s("code",[t._v("address")]),t._v(": address")])]),t._v(" "),s("p",[t._v("(V2Ray 4.16+) Modify the DNS server address. When not specified, keep the address specified in the source unchanged.")]),t._v(" "),s("blockquote",[s("p",[s("code",[t._v("port")]),t._v(": number")])]),t._v(" "),s("p",[t._v("(V2Ray 4.16+) Modify the DNS server port. When not specified, keep the port specified in the source unchanged.")])])}),[],!1,null,null,null);e.default=r.exports}}]);