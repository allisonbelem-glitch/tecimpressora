import { r as o, j as e } from "./main-CQ4vwCAY.js";

const a = [
  { label: "Como Atendemos", href: "#como-funciona" },
  { label: "Quem Somos", href: "#diferenciais" },
  { label: "Marcas", href: "#marcas" },
  { label: "Depoimentos", href: "#depoimentos" }
];

function n() {
  const [r, t] = o.useState(!1);
  return e.jsxs(e.Fragment, {
    children: [
      e.jsx("div", {
        className: "bg-primary text-primary-foreground text-xs py-1.5",
        children: e.jsxs("div", {
          className: "max-w-7xl mx-auto px-4 flex items-center justify-between",
          children: [
            e.jsx("span", { children: "📞 (11) 94078-3341  Seg-Sex 08-18h | Sáb 09-13h" }),
            e.jsx("a", {
              href: "https://wa.me/5511940783341",
              target: "_blank",
              rel: "noopener noreferrer",
              className: "font-medium hover:underline",
              children: "💬 WhatsApp"
            })
          ]
        })
      }),
      e.jsxs("nav", {
        className: "sticky top-0 z-50 bg-background/95 backdrop-blur border-b border-border",
        children: [
          e.jsxs("div", {
            className: "max-w-7xl mx-auto px-4 flex items-center justify-between h-16",
            children: [
              e.jsxs("a", {
                href: "#",
                className: "font-heading text-2xl font-bold tracking-tight",
                children: [
                  e.jsx("span", { className: "text-foreground", children: "TEC" }),
                  e.jsx("span", { className: "text-primary", children: "IMPRESSORA" })
                ]
              }),
              e.jsxs("div", {
                className: "hidden md:flex items-center gap-6",
                children: [
                  a.map(s =>
                    e.jsx(
                      "a",
                      {
                        href: s.href,
                        className:
                          "text-sm font-medium text-muted-foreground hover:text-foreground transition-colors uppercase tracking-wide",
                        children: s.label
                      },
                      s.href
                    )
                  ),
                  e.jsx("a", {
                    href: "https://wa.me/5511940783341",
                    target: "_blank",
                    rel: "noopener noreferrer",
                    className:
                      "bg-primary text-primary-foreground text-sm font-semibold px-4 py-2 rounded-md hover:opacity-90 transition-opacity",
                    children: "💬 WhatsApp"
                  })
                ]
              }),
              e.jsx("button", {
                onClick: () => t(!r),
                className: "md:hidden text-foreground",
                "aria-label": "Menu",
                children: r ? "✕" : "☰"
              })
            ]
          }),
          r &&
            e.jsxs("div", {
              className: "md:hidden bg-background border-t border-border px-4 pb-4 space-y-3",
              children: [
                a.map(s =>
                  e.jsx(
                    "a",
                    {
                      href: s.href,
                      onClick: () => t(!1),
                      className:
                        "block text-sm text-muted-foreground hover:text-foreground uppercase tracking-wide",
                      children: s.label
                    },
                    s.href
                  )
                ),
                e.jsx("a", {
                  href: "https://wa.me/5511940783341",
                  target: "_blank",
                  rel: "noopener noreferrer",
                  className:
                    "block bg-primary text-primary-foreground text-sm font-semibold px-4 py-2 rounded-md text-center",
                  children: "💬 WhatsApp"
                })
              ]
            })
        ]
      })
    ]
  });
}

function i() {
  return e.jsxs("section", {
    className: "relative py-8 md:py-16 overflow-hidden",
    children: [
      e.jsx("div", {
        className:
          "absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent pointer-events-none"
      }),
      e.jsxs("div", {
        className: "relative max-w-5xl mx-auto px-4 text-center",
        children: [
          e.jsx("div", {
            className:
              "inline-block bg-primary/15 text-primary text-xs font-semibold uppercase tracking-widest px-4 py-1.5 rounded-full mb-8",
            children: "Coleta e Entrega em Barueri"
          }),
          e.jsxs("h1", {
            className:
              "font-heading text-4xl sm:text-5xl md:text-7xl font-bold uppercase leading-tight",
            children: [
              "Impressora com Defeito?",
              e.jsx("br", {}),
              e.jsx("span", {
                className: "text-primary",
                children: "Coleta, Manutenção e Devolução."
              })
            ]
          }),
          e.jsxs("p", {
            className:
              "mt-6 text-muted-foreground text-base md:text-lg max-w-2xl mx-auto",
            children: [
              e.jsx("strong", {
                className: "text-foreground",
                children: "15+ anos"
              }),
              " de experiência • Orçamento sem compromisso • Nota ",
              e.jsx("strong", {
                className: "text-foreground",
                children: "5★"
              }),
              " no Google"
            ]
          }),
          e.jsxs("div", {
            className:
              "mt-10 flex flex-col sm:flex-row items-center justify-center gap-3",
            children: [
              e.jsx("a", {
                href: "https://wa.me/5511940783341",
                target: "_blank",
                rel: "noopener noreferrer",
                className:
                  "bg-primary text-primary-foreground font-semibold px-8 py-3.5 rounded-md text-sm hover:opacity-90 transition-opacity w-full sm:w-auto",
                children: "🚚 Solicite sua Coleta Online"
              }),
              e.jsx("a", {
                href: "https://wa.me/5511940783341",
                target: "_blank",
                rel: "noopener noreferrer",
                className:
                  "border border-border text-foreground font-semibold px-8 py-3.5 rounded-md text-sm hover:bg-secondary transition-colors w-full sm:w-auto",
                children: "💬 Falar com Agente"
              }),
              e.jsx("a", {
                href: "tel:011940783341",
                className:
                  "border border-border text-foreground font-semibold px-8 py-3.5 rounded-md text-sm hover:bg-secondary transition-colors w-full sm:w-auto",
                children: "📞 (11) 94078-3341"
              })
            ]
          })
        ]
      })
    ]
  });
}

const d = [
  { num: "01", icon: "📞", title: "Pedido", desc: "Ligue ou mande WhatsApp." },
  { num: "02", icon: "🚚", title: "Coleta", desc: "Buscamos seu equipamento sob agendamento." },
  { num: "03", icon: "🔧", title: "Reparo", desc: "Após sua aprovação." },
  { num: "04", icon: "✅", title: "Devolução", desc: "Equipamento funcionando, com garantia." }
];

function l() {
  return e.jsx("section", {
    id: "como-funciona",
    className: "py-20 bg-secondary/30",
    children: e.jsxs("div", {
      className: "max-w-6xl mx-auto px-4 text-center",
      children: [
        e.jsx("h2", {
          className: "font-heading text-3xl md:text-4xl font-bold uppercase",
          children: "Como Atendemos"
        }),
        e.jsx("div", { className: "mt-2 w-12 h-1 bg-primary mx-auto rounded-full" }),
        e.jsx("div", {
          className: "mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6",
          children: d.map(r =>
            e.jsxs(
              "div",
              {
                className:
                  "bg-card border border-border rounded-xl p-6 text-center hover:border-primary/50 transition-colors",
                children: [
                  e.jsx("span", {
                    className: "text-primary font-heading text-3xl font-bold",
                    children: r.num
                  }),
                  e.jsx("div", { className: "text-3xl mt-3", children: r.icon }),
                  e.jsx("h3", {
                    className: "font-heading text-lg font-semibold uppercase mt-3",
                    children: r.title
                  }),
                  e.jsx("p", {
                    className: "text-sm text-muted-foreground mt-2",
                    children: r.desc
                  })
                ]
              },
              r.num
            )
          )
        })
      ]
    })
  });
}

const c = [
  { icon: "🚚", title: "Coleta Agendada", desc: "Coletamos e Entregamos Sob Agendamento em Barueri-SP" },
  { icon: "⚡", title: "Orçamento Rápido", desc: "Diagnóstico rápido e transparente." },
  { icon: "💪", title: "15+ Anos", desc: "Experiência comprovada no mercado." },
  { icon: "🔒", title: "Garantia", desc: "Todo serviço com garantia." },
  { icon: "🌟", title: "5★ no Google", desc: "Avaliações reais de clientes satisfeitos." },
  { icon: "💰", title: "Preço Justo", desc: "Orçamento sem compromisso." }
];

function m() {
  return e.jsx("section", {
    id: "diferenciais",
    className: "py-20 bg-secondary/30",
    children: e.jsxs("div", {
      className: "max-w-6xl mx-auto px-4 text-center",
      children: [
        e.jsx("h2", {
          className: "font-heading text-3xl md:text-4xl font-bold uppercase",
          children: "Conheça a Tec Impressora"
        }),
        e.jsx("div", { className: "mt-2 w-12 h-1 bg-primary mx-auto rounded-full" }),
        e.jsx("div", {
          className: "mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6",
          children: c.map(r =>
            e.jsxs(
              "div",
              {
                className:
                  "bg-card border border-border rounded-xl p-6 text-left hover:border-primary/50 transition-colors",
                children: [
                  e.jsx("span", { className: "text-3xl", children: r.icon }),
                  e.jsx("h3", {
                    className: "font-heading text-lg font-semibold mt-3",
                    children: r.title
                  }),
                  e.jsx("p", {
                    className: "text-sm text-muted-foreground mt-1",
                    children: r.desc
                  })
                ]
              },
              r.title
            )
          )
        })
      ]
    })
  });
}

const x = ["HP", "Epson", "Brother", "Samsung", "Lexmark", "Canon", "Xerox", "Ricoh", "Kyocera", "OKI", "Zebra", "Elgin", "Bematech"];

function p() {
  return e.jsx("section", {
    id: "marcas",
    className: "py-20",
    children: e.jsxs("div", {
      className: "max-w-5xl mx-auto px-4 text-center",
      children: [
        e.jsx("h2", {
          className: "font-heading text-3xl md:text-4xl font-bold uppercase",
          children: "Marcas que Atendemos"
        }),
        e.jsx("div", { className: "mt-2 w-12 h-1 bg-primary mx-auto rounded-full" }),
        e.jsx("div", {
          className: "mt-12 flex flex-wrap justify-center gap-4",
          children: x.map(r =>
            e.jsx(
              "div",
              {
                className:
                  "bg-card border border-border rounded-lg px-6 py-3 text-sm font-semibold uppercase tracking-wide hover:border-primary/50 transition-colors",
                children: r
              },
              r
            )
          )
        })
      ]
    })
  });
}

const u = [
  { text: "O Allison é um Técnico de Impressora muito experiente, fez a manutenção da minha impressora super rápido e com profissionalismo, agradeço mais uma vez e recomendo a todos.", name: "Rafael Muniz" },
  { text: "Atendimento rápido, conserto de impressora com agilidade, ótimos preços", name: "Ocivaldo Junior" },
  { text: "Ótimo profissional, muito prestativo e resolveu o problema da minha impressora rapidamente! Recomendo!", name: "Beatriz Barros" }
];

function h() {
  return e.jsx("section", {
    id: "depoimentos",
    className: "py-20 bg-secondary/30",
    children: e.jsxs("div", {
      className: "max-w-6xl mx-auto px-4 text-center",
      children: [
        e.jsx("h2", {
          className: "font-heading text-3xl md:text-4xl font-bold uppercase",
          children: "Depoimentos"
        }),
        e.jsxs("div", {
          className: "flex items-center justify-center gap-2 mt-3",
          children: [
            e.jsx("span", { className: "text-4xl font-bold text-foreground", children: "5" }),
            e.jsx("span", { className: "text-primary text-xl", children: "★★★★★" })
          ]
        }),
        e.jsx("p", { className: "text-sm text-muted-foreground mt-1", children: "Avaliações no Google" }),
        e.jsx("div", { className: "mt-2 w-12 h-1 bg-primary mx-auto rounded-full" }),
        e.jsx("div", {
          className: "mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6",
          children: u.map(r =>
            e.jsxs(
              "div",
              {
                className:
                  "bg-card border border-border rounded-xl p-6 text-left hover:border-primary/50 transition-colors",
                children: [
                  e.jsx("div", { className: "text-primary text-sm mb-3", children: "★★★★★" }),
                  e.jsxs("p", {
                    className: "text-sm text-foreground italic",
                    children: ['"', r.text, '"']
                  }),
                  e.jsx("p", {
                    className: "mt-4 text-xs text-muted-foreground",
                    children: e.jsx("strong", {
                      className: "text-foreground",
                      children: r.name
                    })
                  })
                ]
              },
              r.name
            )
          )
        })
      ]
    })
  });
}

function f() {
  return e.jsx("section", {
    className: "py-20 bg-primary/10",
    children: e.jsxs("div", {
      className: "max-w-3xl mx-auto px-4 text-center",
      children: [
        e.jsx("div", { className: "text-4xl mb-4", children: "🚚" }),
        e.jsx("h2", {
          className: "font-heading text-3xl md:text-4xl font-bold uppercase",
          children: "Precisa de Assistência Técnica?"
        }),
        e.jsx("p", {
          className: "mt-3 text-muted-foreground",
          children: "Entre em contato agora e agende sua coleta ou visita."
        }),
        e.jsxs("div", {
          className: "mt-8 flex flex-col sm:flex-row items-center justify-center gap-3",
          children: [
            e.jsx("a", {
              href: "https://wa.me/5511940783341",
              target: "_blank",
              rel: "noopener noreferrer",
              className:
                "bg-primary text-primary-foreground font-semibold px-8 py-3.5 rounded-md text-sm hover:opacity-90 transition-opacity w-full sm:w-auto",
              children: "💬 Falar no WhatsApp"
            }),
            e.jsx("a", {
              href: "tel:011940783341",
              className:
                "border border-border text-foreground font-semibold px-8 py-3.5 rounded-md text-sm hover:bg-secondary transition-colors w-full sm:w-auto",
              children: "📞 (11) 94078-3341"
            })
          ]
        })
      ]
    })
  });
}

function g() {
  return e.jsx("footer", {
    className: "border-t border-border py-8",
    children: e.jsxs("div", {
      className: "max-w-6xl mx-auto px-4 text-center text-sm text-muted-foreground",
      children: [
        e.jsxs("p", {
          className: "font-heading text-lg font-bold text-foreground",
          children: ["TEC", e.jsx("span", { className: "text-primary", children: "IMPRESSORA" })]
        }),
        e.jsxs("p", {
          className: "mt-2",
          children: ["© ", new Date().getFullYear(), " Tec Impressora. Todos os direitos reservados."]
        }),
        e.jsx("p", {
          className: "mt-1",
          children: "Rua Marte 429 Cond Alphaview Barueri - SP."
        })
      ]
    })
  });
}

/* --- COMPONENTE DO BOTÃO FLUTUANTE DO WHATSAPP --- */
function w() {
  return e.jsx("a", {
    href: "https://wa.me/5511940783341",
    className: "whatsapp-float",
    target: "_blank",
    rel: "noopener noreferrer",
    "aria-label": "Falar no WhatsApp",
    children: e.jsx("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 448 512",
      children: e.jsx("path", {
        d: "M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3 18.6-68.1-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"
      })
    })
  });
}

function j() {
  return e.jsxs("div", {
    className: "min-h-screen bg-background text-foreground",
    children: [
      e.jsx(n, {}),
      e.jsx(i, {}),
      e.jsx(l, {}),
      e.jsx(m, {}),
      e.jsx(p, {}),
      e.jsx(h, {}),
      e.jsx(f, {}),
      e.jsx(g, {}),
      e.jsx(w, {}) /* <-- Botão renderizado como componente React */
    ]
  });
}

export { j as component };
