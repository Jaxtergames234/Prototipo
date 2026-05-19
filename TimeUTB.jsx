import { useState } from "react";

const COLORS = {
  navy: "#1a1a2e",
  navyLight: "#16213e",
  navyDeep: "#0f3460",
  green: "#7ee8a2",
  greenDark: "#0a3d1f",
  greenMid: "#0d4f3c",
  amber: "#ffcc80",
  amberDark: "#4a2c00",
  purple: "#c9b1ff",
  purpleDark: "#2d1a4e",
  bg: "#f5f4f0",
  white: "#ffffff",
  textMuted: "#888",
  textDark: "#1a1a2e",
  border: "rgba(0,0,0,0.08)",
};

const S = {
  phone: {
    width: 340,
    background: "#0f0f13",
    borderRadius: 40,
    padding: 10,
    margin: "0 auto",
    border: "1px solid #2a2a35",
  },
  screen: {
    background: COLORS.bg,
    borderRadius: 32,
    overflow: "hidden",
    height: 660,
    display: "flex",
    flexDirection: "column",
    fontFamily: "system-ui, -apple-system, sans-serif",
    position: "relative",
  },
  statusBar: {
    background: COLORS.navy,
    padding: "10px 20px 6px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    flexShrink: 0,
  },
  body: {
    flex: 1,
    overflowY: "auto",
    padding: 16,
    background: COLORS.bg,
  },
  header: {
    background: COLORS.navy,
    padding: "16px 20px 20px",
    flexShrink: 0,
  },
  navBar: {
    background: COLORS.white,
    borderTop: `1px solid ${COLORS.border}`,
    display: "flex",
    flexShrink: 0,
  },
  navItem: (active) => ({
    flex: 1,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    padding: "8px 0",
    cursor: "pointer",
    gap: 3,
    background: "none",
    border: "none",
  }),
  navDot: (active) => ({
    width: 4,
    height: 4,
    borderRadius: "50%",
    background: active ? COLORS.green : "transparent",
    marginTop: 2,
  }),
  card: {
    background: COLORS.white,
    borderRadius: 16,
    padding: "14px",
    border: `0.5px solid ${COLORS.border}`,
    marginBottom: 10,
  },
  pill: (bg, color) => ({
    background: bg,
    color: color,
    fontSize: 11,
    fontWeight: 600,
    padding: "3px 10px",
    borderRadius: 20,
    display: "inline-block",
  }),
  sectionTitle: {
    fontSize: 12,
    fontWeight: 600,
    color: COLORS.textMuted,
    textTransform: "uppercase",
    letterSpacing: "0.5px",
    marginBottom: 10,
    marginTop: 4,
  },
};

const NavBar = ({ tab, setTab }) => {
  const items = [
    { id: "home", icon: "⊞", label: "Inicio" },
    { id: "planner", icon: "📅", label: "Horario" },
    { id: "recursos", icon: "📚", label: "Recursos" },
    { id: "bienestar", icon: "♡", label: "Bienestar" },
  ];
  return (
    <div style={S.navBar}>
      {items.map((item) => (
        <button
          key={item.id}
          style={S.navItem(tab === item.id)}
          onClick={() => setTab(item.id)}
        >
          <span style={{ fontSize: 20 }}>{item.icon}</span>
          <span style={{ fontSize: 10, color: tab === item.id ? COLORS.navy : COLORS.textMuted, fontWeight: tab === item.id ? 600 : 400 }}>
            {item.label}
          </span>
          <div style={S.navDot(tab === item.id)} />
        </button>
      ))}
    </div>
  );
};

const StatusBar = () => (
  <div style={S.statusBar}>
    <span style={{ color: "#fff", fontSize: 13, fontWeight: 600 }}>9:41</span>
    <div style={{ display: "flex", gap: 6, alignItems: "center" }}>
      <span style={{ color: "rgba(255,255,255,0.7)", fontSize: 13 }}>UTB</span>
      <span style={{ color: "#fff", fontSize: 13 }}>●●●</span>
      <span style={{ color: "#fff", fontSize: 13 }}>🔋</span>
    </div>
  </div>
);

function HomeScreen() {
  const suggestions = [
    { color: COLORS.navy, icon: "📖", title: "Repasa Cálculo I", time: "30 min", tag: "Estudio" },
    { color: COLORS.greenMid, icon: "🧘", title: "Pausa activa", time: "10 min", tag: "Bienestar" },
    { color: COLORS.amberDark, icon: "✏️", title: "Resumen de clase", time: "20 min", tag: "Tarea" },
    { color: COLORS.purpleDark, icon: "🎯", title: "Técnica Pomodoro", time: "25 min", tag: "Foco" },
  ];

  return (
    <>
      <div style={{ background: COLORS.navy, padding: "16px 20px 24px", flexShrink: 0 }}>
        <div style={{ color: "rgba(255,255,255,0.55)", fontSize: 13, marginBottom: 2 }}>Buen día,</div>
        <div style={{ color: "#fff", fontSize: 20, fontWeight: 700, marginBottom: 14 }}>usuario 👋</div>
        <div style={{ background: "rgba(255,255,255,0.1)", borderRadius: 16, padding: "12px 16px", border: "0.5px solid rgba(255,255,255,0.15)", display: "flex", alignItems: "center", gap: 12 }}>
          <span style={{ fontSize: 28 }}>⏳</span>
          <div>
            <div style={{ color: "rgba(255,255,255,0.55)", fontSize: 11 }}>Tiempo libre disponible</div>
            <div style={{ color: COLORS.green, fontSize: 20, fontWeight: 700 }}>1h 45 min</div>
            <div style={{ color: "rgba(255,255,255,0.7)", fontSize: 12, marginTop: 2 }}>Próxima clase: Física II · 2:00 PM</div>
          </div>
        </div>
      </div>

      <div style={S.body}>
        <div style={S.sectionTitle}>Sugerencias para tu tiempo libre</div>
        <div style={{ display: "flex", gap: 10, overflowX: "auto", paddingBottom: 8, marginBottom: 14, scrollbarWidth: "none" }}>
          {suggestions.map((s, i) => (
            <div key={i} style={{ flexShrink: 0, width: 128, background: s.color, borderRadius: 16, padding: "14px 12px", cursor: "pointer" }}>
              <div style={{ fontSize: 22, marginBottom: 8 }}>{s.icon}</div>
              <div style={{ color: "#fff", fontSize: 12, fontWeight: 600, lineHeight: 1.3, marginBottom: 4 }}>{s.title}</div>
              <div style={{ color: "rgba(255,255,255,0.5)", fontSize: 11 }}>{s.time}</div>
              <div style={{ marginTop: 8, background: "rgba(255,255,255,0.15)", borderRadius: 10, padding: "2px 8px", display: "inline-block", color: "rgba(255,255,255,0.8)", fontSize: 10 }}>{s.tag}</div>
            </div>
          ))}
        </div>

        <div style={S.sectionTitle}>Acciones rápidas</div>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10, marginBottom: 14 }}>
          {[
            { icon: "📋", title: "Mi horario", sub: "Ver clases de hoy" },
            { icon: "🔔", title: "Recordatorios", sub: "3 pendientes" },
            { icon: "📊", title: "Mi progreso", sub: "Semana 4" },
            { icon: "💡", title: "Consejos", sub: "Nuevos para ti" },
          ].map((a, i) => (
            <div key={i} style={{ ...S.card, marginBottom: 0, cursor: "pointer" }}>
              <div style={{ fontSize: 20, marginBottom: 8 }}>{a.icon}</div>
              <div style={{ fontSize: 13, fontWeight: 600, color: COLORS.textDark }}>{a.title}</div>
              <div style={{ fontSize: 11, color: COLORS.textMuted, marginTop: 2 }}>{a.sub}</div>
            </div>
          ))}
        </div>

        <div style={S.sectionTitle}>Bienestar</div>
        <div style={{ ...S.card, display: "flex", alignItems: "center", gap: 14, cursor: "pointer" }}>
          <span style={{ fontSize: 28 }}>🧠</span>
          <div style={{ flex: 1 }}>
            <div style={{ fontSize: 13, fontWeight: 600, color: COLORS.textDark }}>¿Cómo te sientes hoy?</div>
            <div style={{ fontSize: 11, color: COLORS.textMuted, marginTop: 2 }}>Registra tu estado de ánimo</div>
          </div>
          <span style={S.pill("#e8f5e9", "#2e7d32")}>Nuevo</span>
        </div>

        <div style={{ ...S.card, display: "flex", alignItems: "center", gap: 14 }}>
          <span style={{ fontSize: 24 }}>🔥</span>
          <div style={{ flex: 1 }}>
            <div style={{ fontSize: 13, fontWeight: 600, color: COLORS.textDark }}>Racha activa: 5 días</div>
            <div style={{ fontSize: 11, color: COLORS.textMuted, marginTop: 2 }}>¡Sigue así, vas muy bien!</div>
          </div>
        </div>
      </div>
    </>
  );
}

function PlannerScreen() {
  const days = ["L", "M", "X", "J", "V"];
  const dates = [19, 20, 21, 22, 23];
  const [activeDay, setActiveDay] = useState(1);

  const slots = [
    { time: "7:00", type: "class", name: "Cálculo I", sub: "Aula 301 · Prof. Martínez" },
    { time: "9:00", type: "free", name: "Tiempo libre · 1h", sub: "Sugerencia: repasa la clase anterior" },
    { time: "10:00", type: "activity", name: "Pomodoro de estudio", sub: "Recursos recomendados listos" },
    { time: "11:00", type: "class", name: "Física II", sub: "Lab 102 · Prof. Gómez" },
    { time: "1:00", type: "break", name: "Almuerzo + descanso", sub: "Pausa activa sugerida: 15 min" },
    { time: "2:00", type: "class", name: "Programación I", sub: "Sala de cómputo A" },
    { time: "4:00", type: "free", name: "Tiempo libre · 2h", sub: "Buen momento para avanzar tareas" },
  ];

  const slotColors = {
    class: { bg: COLORS.navy, name: "#fff", sub: "rgba(255,255,255,0.55)" },
    free: { bg: COLORS.white, name: COLORS.textDark, sub: COLORS.textMuted, border: COLORS.border },
    activity: { bg: COLORS.greenMid, name: COLORS.green, sub: "rgba(126,232,162,0.65)" },
    break: { bg: COLORS.amberDark, name: COLORS.amber, sub: "rgba(255,204,128,0.65)" },
  };

  return (
    <>
      <div style={S.header}>
        <div style={{ color: "#fff", fontSize: 18, fontWeight: 700, marginBottom: 12 }}>Mi horario</div>
        <div style={{ display: "flex", gap: 6 }}>
          {days.map((d, i) => (
            <div
              key={i}
              onClick={() => setActiveDay(i)}
              style={{ flex: 1, textAlign: "center", padding: "8px 4px", borderRadius: 10, cursor: "pointer", background: activeDay === i ? COLORS.green : "rgba(255,255,255,0.08)" }}
            >
              <div style={{ fontSize: 10, color: activeDay === i ? COLORS.greenDark : "rgba(255,255,255,0.5)" }}>{d}</div>
              <div style={{ fontSize: 15, fontWeight: 700, color: activeDay === i ? COLORS.greenDark : "#fff" }}>{dates[i]}</div>
            </div>
          ))}
        </div>
      </div>

      <div style={S.body}>
        {slots.map((slot, i) => {
          const c = slotColors[slot.type];
          return (
            <div key={i} style={{ display: "flex", gap: 12, marginBottom: 10, alignItems: "flex-start" }}>
              <div style={{ width: 44, flexShrink: 0, fontSize: 11, color: COLORS.textMuted, paddingTop: 10, textAlign: "right" }}>{slot.time}</div>
              <div style={{ flex: 1, background: c.bg, borderRadius: 14, padding: "12px 14px", border: c.border ? `0.5px solid ${c.border}` : "none" }}>
                <div style={{ fontSize: 13, fontWeight: 600, color: c.name }}>{slot.name}</div>
                <div style={{ fontSize: 11, marginTop: 3, color: c.sub }}>{slot.sub}</div>
                {slot.type === "free" && (
                  <span style={{ marginTop: 6, display: "inline-block", fontSize: 10, background: "#e8f5e9", color: "#2e7d32", padding: "2px 8px", borderRadius: 20, fontWeight: 500 }}>
                    Libre ✓
                  </span>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}

function RecursosScreen() {
  const [activeTab, setActiveTab] = useState("todos");
  const tabs = ["todos", "estudio", "técnicas", "videos", "PDFs"];

  const recursos = [
    { icon: "📄", title: "Guía de derivadas — Cálculo I", type: "PDF", time: "10 min", tag: "estudio" },
    { icon: "🎬", title: "Técnica Feynman explicada", type: "Video", time: "8 min", tag: "técnicas" },
    { icon: "📝", title: "Mapa mental: Leyes de Newton", type: "PDF", time: "5 min", tag: "estudio" },
    { icon: "⏱️", title: "Método Pomodoro paso a paso", type: "Artículo", time: "6 min", tag: "técnicas" },
    { icon: "🎬", title: "Programación básica en Python", type: "Video", time: "15 min", tag: "videos" },
    { icon: "📄", title: "Formulario de Física II", type: "PDF", time: "—", tag: "PDFs" },
  ];

  const filtered = activeTab === "todos" ? recursos : recursos.filter(r => r.tag === activeTab);

  return (
    <>
      <div style={S.header}>
        <div style={{ color: "#fff", fontSize: 18, fontWeight: 700, marginBottom: 12 }}>Recursos rápidos</div>
        <div style={{ background: "rgba(255,255,255,0.1)", borderRadius: 10, padding: "10px 14px", display: "flex", alignItems: "center", gap: 8, border: "0.5px solid rgba(255,255,255,0.15)" }}>
          <span style={{ fontSize: 16 }}>🔍</span>
          <span style={{ color: "rgba(255,255,255,0.4)", fontSize: 13 }}>Buscar recursos...</span>
        </div>
      </div>

      <div style={S.body}>
        <div style={{ display: "flex", gap: 8, overflowX: "auto", paddingBottom: 8, marginBottom: 14, scrollbarWidth: "none" }}>
          {tabs.map(t => (
            <div
              key={t}
              onClick={() => setActiveTab(t)}
              style={{ flexShrink: 0, padding: "6px 14px", borderRadius: 20, fontSize: 12, fontWeight: 500, cursor: "pointer", background: activeTab === t ? COLORS.navy : COLORS.white, color: activeTab === t ? "#fff" : COLORS.textDark, border: `0.5px solid ${COLORS.border}` }}
            >
              {t.charAt(0).toUpperCase() + t.slice(1)}
            </div>
          ))}
        </div>

        <div style={S.sectionTitle}>Recomendados para ti</div>
        {filtered.map((r, i) => (
          <div key={i} style={{ ...S.card, display: "flex", alignItems: "center", gap: 12, cursor: "pointer" }}>
            <div style={{ width: 44, height: 44, borderRadius: 12, background: "#f0f0f0", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 22, flexShrink: 0 }}>{r.icon}</div>
            <div style={{ flex: 1, minWidth: 0 }}>
              <div style={{ fontSize: 13, fontWeight: 600, color: COLORS.textDark, whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>{r.title}</div>
              <div style={{ fontSize: 11, color: COLORS.textMuted, marginTop: 3 }}>{r.type} · {r.time} lectura</div>
            </div>
            <span style={{ fontSize: 18, color: COLORS.textMuted }}>›</span>
          </div>
        ))}
      </div>
    </>
  );
}

function BienestarScreen() {
  const [mood, setMood] = useState(null);
  const moods = ["😔", "😐", "🙂", "😄", "🤩"];
  const moodLabels = ["Mal", "Regular", "Bien", "Muy bien", "¡Excelente!"];

  const tips = [
    { icon: "🧘", title: "Pausa activa de 5 min", sub: "Estira y respira entre clases", tag: "Movimiento" },
    { icon: "💧", title: "Hidratación", sub: "¿Ya tomaste agua hoy?", tag: "Hábito" },
    { icon: "😴", title: "Descanso nocturno", sub: "Duerme 7–8 horas para rendir mejor", tag: "Sueño" },
    { icon: "🌱", title: "Tiempo para ti", sub: "10 min sin pantallas, desconéctate", tag: "Mente" },
  ];

  return (
    <>
      <div style={S.header}>
        <div style={{ color: "#fff", fontSize: 18, fontWeight: 700 }}>Bienestar</div>
        <div style={{ color: "rgba(255,255,255,0.55)", fontSize: 13, marginTop: 4 }}>Cuídate para rendir mejor</div>
      </div>

      <div style={S.body}>
        <div style={{ ...S.card, textAlign: "center", padding: "20px 14px" }}>
          <div style={{ fontSize: 14, fontWeight: 600, color: COLORS.textDark, marginBottom: 14 }}>¿Cómo te sientes ahora?</div>
          <div style={{ display: "flex", justifyContent: "center", gap: 14, marginBottom: 12 }}>
            {moods.map((m, i) => (
              <div
                key={i}
                onClick={() => setMood(i)}
                style={{ fontSize: 28, cursor: "pointer", opacity: mood === null || mood === i ? 1 : 0.35, transform: mood === i ? "scale(1.25)" : "scale(1)", transition: "all 0.2s" }}
              >
                {m}
              </div>
            ))}
          </div>
          {mood !== null && (
            <div style={{ fontSize: 13, color: COLORS.greenMid, fontWeight: 600 }}>
              {moodLabels[mood]} — ¡gracias por compartirlo!
            </div>
          )}
        </div>

        <div style={S.sectionTitle}>Consejos de bienestar</div>
        {tips.map((t, i) => (
          <div key={i} style={{ ...S.card, display: "flex", alignItems: "center", gap: 12, cursor: "pointer" }}>
            <span style={{ fontSize: 26 }}>{t.icon}</span>
            <div style={{ flex: 1 }}>
              <div style={{ fontSize: 13, fontWeight: 600, color: COLORS.textDark }}>{t.title}</div>
              <div style={{ fontSize: 11, color: COLORS.textMuted, marginTop: 2 }}>{t.sub}</div>
            </div>
            <span style={S.pill("#e8f5e9", "#2e7d32")}>{t.tag}</span>
          </div>
        ))}

        <div style={S.sectionTitle}>Mi racha</div>
        <div style={{ ...S.card }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 10 }}>
            <span style={{ fontSize: 13, fontWeight: 600, color: COLORS.textDark }}>Días conectado</span>
            <span style={{ fontSize: 20, fontWeight: 700, color: COLORS.navy }}>🔥 5</span>
          </div>
          <div style={{ display: "flex", gap: 6 }}>
            {["L", "M", "X", "J", "V", "S", "D"].map((d, i) => (
              <div key={i} style={{ flex: 1, textAlign: "center" }}>
                <div style={{ width: "100%", paddingBottom: "100%", borderRadius: "50%", background: i < 5 ? COLORS.navy : "#e0e0e0", marginBottom: 4, position: "relative" }}>
                  {i < 5 && <span style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)", color: COLORS.green, fontSize: 10, fontWeight: 700 }}>✓</span>}
                </div>
                <div style={{ fontSize: 10, color: COLORS.textMuted }}>{d}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default function TimeUTB() {
  const [tab, setTab] = useState("home");

  const screens = {
    home: <HomeScreen />,
    planner: <PlannerScreen />,
    recursos: <RecursosScreen />,
    bienestar: <BienestarScreen />,
  };

  return (
    <div style={{ padding: "20px 0", background: "var(--color-background-secondary)", borderRadius: "var(--border-radius-lg)" }}>
      <div style={{ textAlign: "center", marginBottom: 16 }}>
        <span style={{ fontSize: 13, color: "var(--color-text-secondary)", fontWeight: 500 }}>Prototipo interactivo — TimeUTB</span>
      </div>
      <div style={S.phone}>
        <div style={S.screen}>
          <StatusBar />
          <div style={{ display: "flex", flexDirection: "column", flex: 1, overflow: "hidden" }}>
            {screens[tab]}
          </div>
          <NavBar tab={tab} setTab={setTab} />
        </div>
      </div>
    </div>
  );
}
