import React, { useState } from "react";
import { motion } from "framer-motion";
import "./App.css";
import logo from "./assets/fitera-logo.png"; // ajusta el nombre si es distinto
import { Analytics } from "@vercel/analytics/react"

/* --- PLAN SHOWCASE (Opción C completa) --- */
function PlanShowcase() {
  // ahora empezamos en el dashboard
  const [tab, setTab] = useState("summary");

  const monthDays = [
    // Semana 1
    { day: 1, label: "Full Body", type: "auto" },
    { day: 2, label: "Cardio", type: "auto" },
    { day: 3, label: "Descanso", type: "manual" },
    { day: 4, label: "Upper", type: "auto" },
    { day: 5, label: "Lower", type: "auto" },
    { day: 6, label: "Cardio", type: "auto" },
    { day: 7, label: "Upper", type: "auto" },

    // Semana 2
    { day: 8, label: "Full Body", type: "auto" },
    { day: 9, label: "Cardio", type: "auto" },
    { day: 10, label: "Descanso", type: "manual" },
    { day: 11, label: "Upper", type: "auto" },
    { day: 12, label: "Lower", type: "auto" },
    { day: 13, label: "Cardio", type: "auto" },
    { day: 14, label: "Upper", type: "auto" },

    // Semana 3
    { day: 15, label: "Full Body", type: "auto" },
    { day: 16, label: "Cardio", type: "auto" },
    { day: 17, label: "Descanso", type: "manual" },
    { day: 18, label: "Upper", type: "auto" },
    { day: 19, label: "Lower", type: "auto" },
    { day: 20, label: "Cardio", type: "auto" },
    { day: 21, label: "Upper", type: "auto" },

    // Semana 4
    { day: 22, label: "Full Body", type: "auto" },
    { day: 23, label: "Cardio", type: "auto" },
    { day: 24, label: "Descanso", type: "manual" },
    { day: 25, label: "Lower", type: "auto" },
    { day: 26, label: "Cardio", type: "auto" },
    { day: 27, label: "Upper", type: "auto" },
    { day: 28, label: "Lower", type: "auto" },

    // Semana 5
    { day: 29, label: "Full Body", type: "auto" },
    { day: 30, label: "Cardio", type: "auto" },
    { day: 31, label: "Descanso", type: "manual" },
  ];

  return (
    <motion.section
      className="ft-section ft-planshow ft-section--compact"
      {...sectionAnim}
      id="plan"
    >
      <div className="ft-section-title ft-section-title--center">
        <h2>Después construimos tu mes ideal</h2>
        <p>Una vista previa real de cómo lo verás en Fitera.</p>
      </div>

      {/* TABS */}
      <div className="ft-planshow-tabs">
        <button
          className={`ft-planshow-tab ${tab === "summary" ? "active" : ""}`}
          onClick={() => setTab("summary")}
        >
          Resumen
        </button>
        <button
          className={`ft-planshow-tab ${tab === "routine" ? "active" : ""}`}
          onClick={() => setTab("routine")}
        >
          Rutina
        </button>
        <button
          className={`ft-planshow-tab ${tab === "food" ? "active" : ""}`}
          onClick={() => setTab("food")}
        >
          Comida
        </button>
        <button
          className={`ft-planshow-tab ${tab === "calendar" ? "active" : ""}`}
          onClick={() => setTab("calendar")}
        >
          Calendario
        </button>
      </div>

      {/* PHONE MOCKUP */}
      <motion.div
        className="ft-phone"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="ft-phone-screen">
          {/* === TAB RESUMEN / DASHBOARD === */}
          {tab === "summary" && (
            <motion.div
              key="summary"
              className="ft-phone-content ft-summary"
              initial={{ opacity: 0, x: -35 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.25 }}
            >
              {/* Header tipo “Hola, Javi” */}
              <div className="ft-dash-header">
                <div className="ft-dash-avatar">JH</div>
                <div className="ft-dash-header-text">
                  <p className="ft-dash-hello">Hola, Javi</p>
                  <p className="ft-dash-sub">
                    Entrenamiento y nutrición personalizados
                  </p>
                </div>
                <div className="ft-dash-gear">⚙️</div>
              </div>

              {/* Fecha */}
              <div className="ft-dash-date">
                <p className="ft-dash-date-main">jue, 27 nov.</p>
                <p className="ft-dash-date-today">Hoy</p>
              </div>

              {/* Sección Entrenamiento */}
              <div className="ft-dash-section">
                <h3 className="ft-phone-title ft-dash-title">Entrenamiento</h3>

                {/* icono redondo + texto Gimnasio */}
                <div className="ft-dash-training-top">
                  <div className="ft-dash-training-icon">🏋️‍♂️</div>
                  <span className="ft-dash-training-place">Gimnasio</span>
                </div>

                <div className="ft-dash-training-circle-wrapper">
                  <div className="ft-dash-training-circle">
                    <span className="ft-dash-training-number">24</span>
                    <span className="ft-dash-training-label"> ejercicios restantes</span>
                  </div>
                </div>
              </div>


              {/* Sección Dieta: pills + macros + barra kcal */}
              <div className="ft-dash-section">
                <h3 className="ft-phone-title ft-dash-title">Dieta</h3>

                {/* Pills de comidas */}
                <div className="ft-dash-meals-row">
                  <div className="ft-dash-meal active">
                    <div className="ft-dash-meal-icon">☕</div>
                    <p className="ft-dash-meal-label">Desayuno</p>
                    <p className="ft-dash-meal-kcal">75 kcal</p>
                  </div>
                  <div className="ft-dash-meal">
                    <div className="ft-dash-meal-icon">🍽️</div>
                    <p className="ft-dash-meal-label">Almuerzo</p>
                    <p className="ft-dash-meal-kcal">335 kcal</p>
                  </div>
                  <div className="ft-dash-meal">
                    <div className="ft-dash-meal-icon">🍔</div>
                    <p className="ft-dash-meal-label">Comida</p>
                    <p className="ft-dash-meal-kcal">1172 kcal</p>
                  </div>
                  <div className="ft-dash-meal">
                    <div className="ft-dash-meal-icon">🍪</div>
                    <p className="ft-dash-meal-label">Merienda</p>
                    <p className="ft-dash-meal-kcal">335 kcal</p>
                  </div>
                  <div className="ft-dash-meal">
                    <div className="ft-dash-meal-icon">🐟</div>
                    <p className="ft-dash-meal-label">Cena</p>
                    <p className="ft-dash-meal-kcal">837 kcal</p>
                  </div>
                </div>

                {/* Macros del día */}
                <div className="ft-meal-card ft-meal-macros ft-dash-macros-card">
                  <h4>Macros del día</h4>

                  <div className="ft-macro-circles">
                    <div className="ft-macro-item">
                      <div className="ft-macro-circle protein">
                        <div className="ft-macro-inner">
                          <span className="ft-macro-percent">68%</span>
                        </div>
                      </div>
                      <p className="ft-macro-label">Proteína</p>
                      <p className="ft-macro-grams">54 g</p>
                    </div>

                    <div className="ft-macro-item">
                      <div className="ft-macro-circle fat">
                        <div className="ft-macro-inner">
                          <span className="ft-macro-percent">0%</span>
                        </div>
                      </div>
                      <p className="ft-macro-label">Grasas</p>
                      <p className="ft-macro-grams">112 g</p>
                    </div>

                    <div className="ft-macro-item">
                      <div className="ft-macro-circle carb">
                        <div className="ft-macro-inner">
                          <span className="ft-macro-percent">8%</span>
                        </div>
                      </div>
                      <p className="ft-macro-label">Carbs</p>
                      <p className="ft-macro-grams">386 g</p>
                    </div>
                  </div>

                  <p className="ft-meal-macros-note">
                    Objetivos basados en tu meta diaria y ratios de macros.
                  </p>
                </div>

                {/* Progreso diario de calorías */}
                <div className="ft-meal-card ft-dash-progress-card">
                  <h4>Progreso diario de calorías</h4>
                  <p className="ft-dash-progress-text">
                    Calorías netas: 2754 kcal (consumidas 594 - quemadas 0)
                  </p>
                  <div className="ft-dash-progress-bar">
                    <div
                      className="ft-dash-progress-fill"
                      style={{ width: "18%" }}
                    />
                  </div>
                  <p className="ft-dash-progress-note">
                    Referencia objetivo: 3348 kcal
                  </p>
                </div>
              </div>
            </motion.div>
          )}

          {/* === TAB RUTINA (SIN CAMBIOS) === */}
          {tab === "routine" && (
            <motion.div
              key="routine"
              className="ft-phone-content"
              initial={{ opacity: 0, x: 35 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.25 }}
            >
              {/* Cabecera de la sesión */}
              <div className="ft-workout-header">
                <h3>Full Body</h3>
                <p>7 ejercicios · Sesión generada automáticamente para este día.</p>
              </div>

              {/* Info extra del entrenamiento */}
              <div className="ft-workout-card ft-workout-card-info">
                <h4>Info extra del entrenamiento</h4>
                <ul className="ft-workout-bullets">
                  <li>Calentamiento: 8–12 min de movilidad + 2 series de aproximación.</li>
                  <li>Esfuerzo: RPE 7–8 (deja 1–2 repeticiones en recámara).</li>
                  <li>Progresión: +2–5% o +1 rep cuando completes las series altas.</li>
                  <li>Descanso 60–120 s según el ejercicio.</li>
                </ul>
              </div>

              {/* Ejercicio 1 */}
              <div className="ft-workout-card">
                <h4 className="ft-workout-exercise">Sentadilla con disco</h4>
                <p className="ft-workout-tag">General</p>
                <div className="ft-workout-grid">
                  <div className="ft-workout-row">
                    <span>Series</span>
                    <span>2</span>
                  </div>
                  <div className="ft-workout-row">
                    <span>Reps</span>
                    <span>12 – 8</span>
                  </div>
                  <div className="ft-workout-row">
                    <span>Tempo</span>
                    <span>2-0-2</span>
                  </div>
                  <div className="ft-workout-row">
                    <span>Descanso</span>
                    <span>90s</span>
                  </div>
                </div>
              </div>

              {/* Ejercicio 2 */}
              <div className="ft-workout-card">
                <h4 className="ft-workout-exercise">Dumbbell Decline Bench Press</h4>
                <p className="ft-workout-tag">General</p>
                <div className="ft-workout-grid">
                  <div className="ft-workout-row">
                    <span>Series</span>
                    <span>2</span>
                  </div>
                  <div className="ft-workout-row">
                    <span>Reps</span>
                    <span>12 – 8</span>
                  </div>
                  <div className="ft-workout-row">
                    <span>Tempo</span>
                    <span>2-0-2</span>
                  </div>
                  <div className="ft-workout-row">
                    <span>Descanso</span>
                    <span>90s</span>
                  </div>
                </div>
              </div>
            </motion.div>
          )}


          {tab === "food" && (
            <motion.div
              key="food"
              className="ft-phone-content"
              initial={{ opacity: 0, x: -35 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.25 }}
            >
              {/* Cabecera de la comida */}
              <div className="ft-meal-header">
                <h3>Comida — 2025-11-27</h3>
                <p>Vista de una comida dentro de Fitera.</p>
              </div>

              {/* Tarjeta Kcal */}
              <div className="ft-meal-card ft-meal-kcal">
                <div className="ft-meal-kcal-top">
                  <h4>Kcal en esta comida</h4>
                  <p>417 / 745 kcal</p>
                </div>
                <div className="ft-meal-bar">
                  <div className="ft-meal-bar-fill" />
                </div>
                <p className="ft-meal-kcal-remaining">Te quedan 328 kcal.</p>
              </div>

              {/* Tarjeta macros */}
              <div className="ft-meal-card ft-meal-macros">
                <h4>Macros de Desayuno</h4>

                <div className="ft-macro-circles">
                  <div className="ft-macro-item">
                    <div className="ft-macro-circle protein">
                      <div className="ft-macro-inner">
                        <span className="ft-macro-percent">61%</span>
                      </div>
                    </div>
                    <p className="ft-macro-label">Proteína</p>
                    <p className="ft-macro-grams">14 g</p>
                  </div>

                  <div className="ft-macro-item">
                    <div className="ft-macro-circle fat">
                      <div className="ft-macro-inner">
                        <span className="ft-macro-percent">56%</span>
                      </div>
                    </div>
                    <p className="ft-macro-label">Grasas</p>
                    <p className="ft-macro-grams">11 g</p>
                  </div>

                  <div className="ft-macro-item">
                    <div className="ft-macro-circle carb">
                      <div className="ft-macro-inner">
                        <span className="ft-macro-percent">52%</span>
                      </div>
                    </div>
                    <p className="ft-macro-label">Carbs</p>
                    <p className="ft-macro-grams">45 g</p>
                  </div>
                </div>

                <p className="ft-meal-macros-note">
                  Objetivo por comida según tu distribución diaria.
                </p>
              </div>

              {/* Total listado */}
              <p className="ft-meal-total">Total listado: 594 kcal</p>

              {/* Lista de alimentos */}
              <div className="ft-food-list">
                <div className="ft-food-item">
                  <div className="ft-food-icon">🍽️</div>
                  <div className="ft-food-text">
                    <p className="ft-food-name">Paella, Culinea Lidl</p>
                    <p className="ft-food-meta">300 g — 285 kcal</p>
                  </div>
                </div>

                <div className="ft-food-item">
                  <div className="ft-food-icon">🍶</div>
                  <div className="ft-food-text">
                    <p className="ft-food-name">Greek Natural Yogurt</p>
                    <p className="ft-food-meta">100 g — 132 kcal</p>
                  </div>
                </div>
              </div>

              {/* Botón Añadir */}
              <button type="button" className="ft-meal-add">
                <span className="ft-meal-add-icon">🔍</span>
                <span>Añadir</span>
              </button>
            </motion.div>
          )}


          {tab === "calendar" && (
            <motion.div
              key="calendar"
              className="ft-phone-content"
              initial={{ opacity: 0, y: 35 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.25 }}
            >
              <h3 className="ft-phone-title">Calendario</h3>
              <p className="ft-phone-sub">Asigna tus rutinas a cada día.</p>

              {/* Leyenda */}
              <div className="ft-cal-legend">
                <div className="ft-cal-legend-item">
                  <span className="ft-cal-dot manual" />
                  <span>Rutina manual asignada</span>
                </div>
                <div className="ft-cal-legend-item">
                  <span className="ft-cal-dot auto" />
                  <span>Plan automático asignado</span>
                </div>
              </div>

              {/* Mes y navegadores */}
              <div className="ft-cal-month-row">
                <button type="button" className="ft-cal-nav">
                  ‹
                </button>
                <span className="ft-cal-month">diciembre 2025</span>
                <button type="button" className="ft-cal-nav">
                  ›
                </button>
              </div>

              {/* Grid mensual */}
              <div className="ft-cal-grid">
                {["L", "M", "X", "J", "V", "S", "D"].map((d) => (
                  <div key={d} className="ft-cal-dow">
                    {d}
                  </div>
                ))}

                {Array.from({ length: 31 }, (_, i) => {
                  const day = i + 1;
                  const meta = monthDays.find((d) => d.day === day);

                  return (
                    <div
                      key={day}
                      className={
                        "ft-cal-day" + (meta ? " has-session" : "")
                      }
                    >
                      <span className="ft-cal-day-num">{day}</span>
                      {meta && (
                        <span
                          className={
                            "ft-cal-tag " +
                            (meta.type === "manual" ? "manual" : "auto")
                          }
                        >
                          {meta.label}
                        </span>
                      )}
                    </div>
                  );
                })}
              </div>
            </motion.div>
          )}
        </div>
      </motion.div>
    </motion.section>
  );
}



const sectionAnim = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.35 },
  transition: { duration: 0.6 },
};

const scanSteps = {
  profile: {
    label: "Perfil",
    time: "30 seg",
    title: "Tu perfil",
    subtitle: "Lo básico para empezar.",
    bullets: [
      "Datos simples: edad, peso y altura.",
      "Preferencias y unidades.",
    ],
  },
  baseline: {
    label: "Estado",
    time: "1 min",
    title: "Tu estado actual",
    subtitle: "Qué nivel tienes hoy.",
    bullets: [
      "Nivel de actividad.",
      "Cómo te encuentras físicamente.",
    ],
  },
  goal: {
    label: "Objetivo",
    time: "30 seg",
    title: "Tu objetivo",
    subtitle: "Marcamos una dirección clara.",
    bullets: [
      "Perder, ganar o mantener.",
      "Ritmo y enfoque.",
    ],
  },
  advanced: {
    label: "Extra",
    time: "Opcional",
    title: "Detalles opcionales",
    subtitle: "Solo si quieres más precisión.",
    bullets: [
      "Medidas rápidas.",
      "Pequeñas pruebas guiadas.",
    ],
  },
};



function App() {
  // Estado para el pequeño simulador
  const [goal, setGoal] = useState("gain");
  const [days, setDays] = useState(3);
  const [scanStep, setScanStep] = useState("profile");
  const currentScan = scanSteps[scanStep];

  const [feature, setFeature] = useState("routines");
    const [aiFocus, setAiFocus] = useState("workout");

  const aiDetails = {
    workout: {
      title: "Cómo usamos IA en tus entrenos",
      bullets: [
        "Calcula volumen y días según tu objetivo.",
        "Sugiere ejercicios, series y repeticiones.",
        "Te deja editar todo antes de guardarlo."
      ],
    },
    food: {
      title: "Cómo usamos IA en tu comida",
      bullets: [
        "Reconoce tu plato a partir de una foto.",
        "Estima ración, kcal y macros principales.",
        "Encaja la comida dentro de tu día."
      ],
    },
    adapt: {
      title: "Cómo aprende de ti",
      bullets: [
        "Tiene en cuenta lo que completas y lo que no.",
        "Ajusta carga y frecuencia con el tiempo.",
        "Respeta siempre los límites que tú marques."
      ],
    },
  };

  const featureConfig = {
    routines: {
      title: "Crea tus propias rutinas",
      description:
        "Elige ejercicios, series y descansos. Guarda el bloque y úsalo cuando quieras.",
      chips: ["Full body", "Upper / Lower", "Push / Pull"],
      caption: "Pensado para quienes quieren un plan 100% suyo."
    },
    share: {
      title: "Comparte tus planes",
      description:
        "Envía tu rutina a amigos o publícala en la comunidad de Fitera.",
      chips: ["Link rápido", "Copiar plan", "Ver usos"],
      caption: "Perfecto para entrenar con tu gente, aunque no estéis juntos."
    },
    scan: {
      title: "Escanea tu comida",
      description:
        "Apunta con la cámara al código de barras y añadimos kcal y macros al instante.",
      chips: ["Código de barras", "Historial", "Favoritos"],
      caption: "No más tablas infinitas: comer bien sin perder tiempo."
    },
    community: {
      title: "Publica tus ejercicios",
      description:
        "Sube tus variantes con vídeo y deja que otros las guarden en sus rutinas.",
      chips: ["Feed del gym", "Likes reales", "Guardados"],
      caption: "Una comunidad centrada en el progreso, no en el postureo."
    }
  };

  const currentFeature = featureConfig[feature];

  const goalLabel = {
    gain: "Ganar músculo",
    lose: "Perder peso",
    keep: "Mantenerme",
    cardio: "Mejorar cardio",
  }[goal];

  const daysLabel = `${days} día${days === 1 ? "" : "s"}/semana`;

  return (
    <div className="ft-page">
      {/* NAV */}
      <header className="ft-nav">
        <div className="ft-nav-inner">
          <div className="ft-brand">
            <img src={logo} alt="Fitera" />
            <span>Fitera</span>
          </div>

          <nav className="ft-nav-links">
            <a href="#top">Inicio</a>
            <a href="#scan">Diagnóstico</a>
            <a href="#plan">Plan</a>
            <a href="#ai">IA</a> 
            <a href="#sim">Funcionalidades</a>
            <a href="#social">Social</a>
            <a href="#beta">Beta</a>
          </nav>

          <a href="#beta" className="ft-nav-cta">
            Beta privada
          </a>
        </div>
      </header>

      <main className="ft-main">
        {/* SECTION 1 – HERO */}
        <motion.section
          className="ft-section ft-hero ft-section--hero"
          {...sectionAnim}
          id="top"
        >
          <div className="ft-hero-left">
            <p className="ft-tag">Fitness · Nutrición · Social</p>
            <h1>
              Una sola app para
              <span> entrenar, gestionar tu nutrición y conectar</span>.
            </h1>
            <p className="ft-hero-sub">
              Fitera diseña tu día según tu cuerpo, tu objetivo y tu agenda. Tú
              solo lo ejecutas.
            </p>
            <div className="ft-hero-actions">
              <a href="#beta" className="ft-btn-main">
                Quiero entrar en la beta
              </a>
              <a href="#scan" className="ft-btn-ghost">
                Cómo funciona
              </a>
            </div>
            <p className="ft-hero-mini">
              App en desarrollo · Beta privada con usuarios reales.
            </p>
          </div>

          <div className="ft-hero-right">
            <div className="ft-orbit">
              <div className="ft-orbit-core">Tú</div>
              <div className="ft-orbit-pill pill-train">Entrenamiento</div>
              <div className="ft-orbit-pill pill-food">Nutrición</div>
              <div className="ft-orbit-pill pill-social">Comunidad</div>
            </div>
          </div>
        </motion.section>

        {/* SECTION 2 – DIAGNÓSTICO */}
                {/* SECTION 2 – DIAGNÓSTICO */}
        <motion.section
          className="ft-section ft-scan ft-section--compact"
          {...sectionAnim}
          id="scan"
        >
          <div className="ft-section-title">
            <h2>Primero entendemos tu punto de partida</h2>
            <p>Unas cuantas preguntas sencillas para personalizar tu experiencia.</p>

          </div>

          <div className="ft-scan-shell">
            {/* Columna izquierda: pasos */}
            <div className="ft-scan-steps">
              {Object.entries(scanSteps).map(([key, step]) => (
                <button
                  key={key}
                  type="button"
                  className={
                    "ft-scan-step" + (scanStep === key ? " active" : "")
                  }
                  onClick={() => setScanStep(key)}
                >
                  <div className="ft-scan-step-main">
                    <span className="ft-scan-step-badge">
                      {key === "profile"
                        ? "1"
                        : key === "baseline"
                        ? "2"
                        : key === "goal"
                        ? "3"
                        : "4"}
                    </span>
                    <span className="ft-scan-step-label">{step.label}</span>
                  </div>
                  <span className="ft-scan-step-time">{step.time}</span>
                </button>
              ))}
              
            </div>

            {/* Columna derecha: detalle del paso */}
            <motion.div
              key={scanStep}
              className="ft-scan-detail"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.25 }}
            >
              <p className="ft-scan-detail-tag">Paso activo</p>
              <h3>{currentScan.title}</h3>
              <p className="ft-scan-detail-sub">{currentScan.subtitle}</p>

              <ul className="ft-scan-list">
                {currentScan.bullets.map((item, idx) => (
                  <li key={idx}>
                    <span className="ft-scan-dot" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              {scanStep === "advanced" && (
                <p className="ft-scan-optional">
                  Este paso es opcional.
                </p>

              )}
            </motion.div>
          </div>
        </motion.section>



        {/* SECTION 3 – PLAN */}
        <PlanShowcase />
{/* SECTION 3 – IA / CARRIL + DETALLE */}
<motion.section
  className="ft-section ft-ai ft-section--compact"
  {...sectionAnim}
  id="ai"
>
  <div className="ft-ai-head">
    <div>
      <h2>IA integrada en tu día</h2>
      <p>Te sugiere, tú decides.</p>
    </div>
    <span className="ft-ai-badge">IA en beta</span>
  </div>

  {/* Carril de IA */}
  <div className="ft-ai-rail">
    {/* Pill 1 – Rutinas */}
    <button
      type="button"
      className={
        "ft-ai-pill" + (aiFocus === "workout" ? " active" : "")
      }
      onMouseEnter={() => setAiFocus("workout")}
      onFocus={() => setAiFocus("workout")}
      onClick={() => setAiFocus("workout")}
    >
      <div className="ft-ai-pill-icon">🏋️‍♂️</div>
      <div className="ft-ai-pill-main">
        <span className="ft-ai-pill-title">Sesiones generadas</span>
        <span className="ft-ai-pill-sub">
          Rutinas según tu objetivo, nivel y días.
        </span>
      </div>
    </button>

    {/* Pill 2 – Foto de comida */}
    <button
      type="button"
      className={
        "ft-ai-pill" + (aiFocus === "food" ? " active" : "")
      }
      onMouseEnter={() => setAiFocus("food")}
      onFocus={() => setAiFocus("food")}
      onClick={() => setAiFocus("food")}
    >
      <div className="ft-ai-pill-icon">📸</div>
      <div className="ft-ai-pill-main">
        <span className="ft-ai-pill-title">Foto de tu plato</span>
        <span className="ft-ai-pill-sub">
          Detectamos la comida y estimamos kcal y macros.
        </span>
      </div>
    </button>

    {/* Pill 3 – Adaptación */}
    <button
      type="button"
      className={
        "ft-ai-pill" + (aiFocus === "adapt" ? " active" : "")
      }
      onMouseEnter={() => setAiFocus("adapt")}
      onFocus={() => setAiFocus("adapt")}
      onClick={() => setAiFocus("adapt")}
    >
      <div className="ft-ai-pill-icon">🧠</div>
      <div className="ft-ai-pill-main">
        <span className="ft-ai-pill-title">Aprende de ti</span>
        <span className="ft-ai-pill-sub">
          Ajusta propuestas según lo que completas o cambias.
        </span>
      </div>
    </button>
  </div>

  {/* Tarjeta que cambia según la pill activa */}
  <div className="ft-ai-detail">
    <h3 className="ft-ai-detail-title">
      {aiDetails[aiFocus].title}
    </h3>
    <ul className="ft-ai-detail-list">
      {aiDetails[aiFocus].bullets.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
    <p className="ft-ai-detail-note">
      La IA te da atajos; tú revisas y confirmas antes de guardar.
    </p>
  </div>
</motion.section>


        {/* SECTION 4 – BLOQUE INTERACTIVO DE FEATURES */}
        <motion.section
          className="ft-section ft-sim ft-section--compact"
          {...sectionAnim}
          id="sim"
        >
          <div className="ft-section-title">
            <h2>Te damos la posibilidad de tenerlo todo en uno</h2>
            <p>Elige una función para ver lo que podrás hacer dentro de Fitera.</p>
          </div>

          <div className="ft-sim-layout">
            {/* Columna izquierda: “tabs” interactivos */}
            <div className="ft-sim-options">
              <button
                type="button"
                className={
                  "ft-sim-option" + (feature === "routines" ? " active" : "")
                }
                onClick={() => setFeature("routines")}
              >
                <span className="ft-sim-option-icon">🏋️‍♂️</span>
                <span className="ft-sim-option-text">Crear rutinas</span>
              </button>

              <button
                type="button"
                className={"ft-sim-option" + (feature === "share" ? " active" : "")}
                onClick={() => setFeature("share")}
              >
                <span className="ft-sim-option-icon">📤</span>
                <span className="ft-sim-option-text">Compartir plan</span>
              </button>

              <button
                type="button"
                className={"ft-sim-option" + (feature === "scan" ? " active" : "")}
                onClick={() => setFeature("scan")}
              >
                <span className="ft-sim-option-icon">📷</span>
                <span className="ft-sim-option-text">Escanear comida</span>
              </button>

              <button
                type="button"
                className={
                  "ft-sim-option" + (feature === "community" ? " active" : "")
                }
                onClick={() => setFeature("community")}
              >
                <span className="ft-sim-option-icon">🌍</span>
                <span className="ft-sim-option-text">Comunidad</span>
              </button>
            </div>

            {/* Columna derecha: “preview” tipo producto */}
            <div className="ft-sim-preview">
              <div className="ft-sim-preview-header">
                <span className="ft-sim-preview-pill">Vista rápida</span>
                <span className="ft-sim-preview-tag">Función de la beta</span>
              </div>

              <h3 className="ft-sim-preview-title">{currentFeature.title}</h3>
              <p className="ft-sim-preview-desc">{currentFeature.description}</p>

              <div className="ft-sim-preview-chips">
                {currentFeature.chips.map((chip) => (
                  <span key={chip} className="ft-sim-preview-chip">
                    {chip}
                  </span>
                ))}
              </div>

              <div className="ft-sim-preview-phone">
                <div className="ft-sim-preview-phone-header">
                  <span className="dot" />
                  <span className="dot" />
                  <span className="dot" />
                </div>

                {feature === "routines" && (
                  <div className="ft-sim-preview-phone-body">
                    <p className="ft-sim-phone-title">Nueva rutina</p>
                    <div className="ft-sim-phone-row">
                      <span>Sentadilla</span>
                      <span>4×8</span>
                    </div>
                    <div className="ft-sim-phone-row">
                      <span>Press banca</span>
                      <span>4×10</span>
                    </div>
                    <div className="ft-sim-phone-row">
                      <span>Remo mancuerna</span>
                      <span>3×12</span>
                    </div>
                    <button className="ft-sim-phone-cta">Guardar en calendario</button>
                  </div>
                )}

                {feature === "share" && (
                  <div className="ft-sim-preview-phone-body">
                    <p className="ft-sim-phone-title">Compartir rutina</p>
                    <div className="ft-sim-phone-row">
                      <span>Upper / Lower · 4 días</span>
                      <span className="ft-sim-badge">Listo</span>
                    </div>
                    <div className="ft-sim-phone-row">
                      <span>Link de invitación</span>
                      <span className="ft-sim-link">fitera.app/plan/4d…</span>
                    </div>
                    <button className="ft-sim-phone-cta">Enviar a mis amigos</button>
                  </div>
                )}

                {feature === "scan" && (
                  <div className="ft-sim-preview-phone-body ft-sim-phone-scan">
                    <p className="ft-sim-phone-title">Escanear alimento</p>

                    <div className="ft-sim-scan-camera">
                      <div className="ft-sim-scan-frame">
                        <div className="ft-sim-scan-barcode" />
                      </div>
                      <p className="ft-sim-scan-helper">
                        Enfoca el código de barras para añadirlo a tu día.
                      </p>
                    </div>

                    <div className="ft-sim-phone-row">
                      <span>Yogur natural 0%</span>
                      <span>97 kcal</span>
                    </div>

                    <div className="ft-sim-scan-meal-row">
                      <span className="ft-sim-scan-meal-pill">+ Desayuno</span>
                      <span className="ft-sim-scan-meal-pill">+ Comida</span>
                      <span className="ft-sim-scan-meal-pill">+ Cena</span>
                    </div>

                    <button className="ft-sim-phone-cta">Añadir al día</button>
                  </div>
                )}


                {feature === "community" && (
                  <div className="ft-sim-preview-phone-body ft-sim-phone-community">
                    <div className="ft-sim-community-header">
                      <div className="ft-sim-community-avatar">JH</div>
                      <div>
                        <p className="ft-sim-community-name">Javi · Hip thrust en banco</p>
                        <p className="ft-sim-community-gym">Gym Factory · Glúteos</p>
                      </div>
                      <span className="ft-sim-community-menu">⋯</span>
                    </div>

                    <div className="ft-sim-community-img">
                      <span className="ft-sim-community-play">▶</span>
                    </div>

                    <div className="ft-sim-community-actions">
                      <div className="ft-sim-icon-row">
                        <span className="ft-sim-icon">❤️</span>
                        <span className="ft-sim-icon">💬</span>
                        <span className="ft-sim-icon">🔁</span>
                        <span className="ft-sim-icon right">🔖</span>
                      </div>
                      <p className="ft-sim-stats">132 me gusta · 24 comentarios</p>
                      <p className="ft-sim-caption">
                        Variación de hip thrust para sentir más el glúteo. Úsalo en tu día de pierna.
                      </p>
                      <button className="ft-sim-phone-cta">Guardar en mi rutina</button>
                    </div>
                  </div>
                )}

              </div>

              <p className="ft-sim-preview-foot">{currentFeature.caption}</p>
            </div>
          </div>
        </motion.section>



        {/* SECTION 5 – SOCIAL */}
        
    <motion.section
      className="ft-section ft-social ft-section--compact"
      {...sectionAnim}
      id="social"
    >
      <div className="ft-section-title">
        <h2>Entrenas con tu gente</h2>
        <p>Representas a tu gimnasio y conectas con personas como tú.</p>
      </div>

      <div className="ft-social-strip">
        {/* Card 1: Representa a tu gym */}
        <div className="ft-social-card">
          <h3 className="ft-social-title">Tu perfil, tu gimnasio</h3>
          <p className="ft-social-main">
            En tu perfil indicas dónde entrenas y pasas a representar a tu gimnasio dentro de Fitera.
          </p>

          <div className="ft-social-gym-chips">
            <span className="ft-social-gym-chip active">Gym Factory</span>
            <span className="ft-social-gym-chip">Basic-Fit</span>
            <span className="ft-social-gym-chip">Synergym</span>
            <span className="ft-social-gym-chip">Otro...</span>
          </div>

          <p className="ft-social-meta">
            Verás gente, rutinas y contenido ligado a tu centro… y a otros cercanos.
          </p>
        </div>

        {/* Card 2: Conecta con gente de tu gym y de otros */}
              
        <div className="ft-social-card">
          <h3 className="ft-social-title">Conecta con personas como tú</h3>

          {/* Lista de perfiles estilo preview */}
          <div className="ft-social-profiles">
            <div className="ft-social-profile">
              <div className="ft-profile-avatar">AM</div>
              <div className="ft-profile-info">
                <p className="ft-profile-name">Ana Martín</p>
                <p className="ft-profile-gym">Gym Factory · Barre</p>
              </div>
              <span className="ft-profile-follow">➕ Seguir</span>
            </div>

            <div className="ft-social-profile">
              <div className="ft-profile-avatar">LC</div>
              <div className="ft-profile-info">
                <p className="ft-profile-name">Luis Campos</p>
                <p className="ft-profile-gym">Basic-Fit · Pierna</p>
              </div>
              <span className="ft-profile-follow">➕ Seguir</span>
            </div>

            <div className="ft-social-profile">
              <div className="ft-profile-avatar">DR</div>
              <div className="ft-profile-info">
                <p className="ft-profile-name">Dani Ruiz</p>
                <p className="ft-profile-gym">McFit · Full Body</p>
              </div>
              <span className="ft-profile-follow">➕ Seguir</span>
            </div>

            <div className="ft-social-more">
              <span>+ 24 personas más</span>
            </div>
          </div>

          <p className="ft-social-main">
            Encuentra a quienes entrenan a tu misma hora, siguen rutinas similares
            o comparten tus objetivos. Conecta, comparte y entrena acompañado.
          </p>

          <div className="ft-social-tags">
            <span>#hipertrofia</span>
            <span>#pierna</span>
            <span>#cardio</span>
            <span>#fullbody</span>
          </div>
        </div>


        {/* Card 3: Comparte como si fuera Instagram */}
        <div className="ft-social-card">
          <h3 className="ft-social-title">Comparte tus logros</h3>

          <div className="ft-social-post">
            <div className="ft-social-post-header">
              <div className="ft-avatar-circle small">JH</div>
              <div>
                <p className="ft-social-post-name">Javi · Back squat PR</p>
                <p className="ft-social-post-gym">Gym Factory · Fuerza</p>
              </div>
              <span className="ft-social-post-menu">⋯</span>
            </div>

            <div className="ft-social-post-media">
              <span className="ft-social-post-play">▶</span>
            </div>

            <div className="ft-social-post-actions">
              <div className="ft-social-post-icons">
                <span>❤️</span>
                <span>💬</span>
                <span>🔁</span>
                <span className="right">🔖</span>
              </div>
              <p className="ft-social-post-stats">154 me gusta · 32 comentarios</p>
              <p className="ft-social-post-caption">
                Nuevo récord de sentadilla. Puedes guardar esta rutina en tu plan semanal.
              </p>
            </div>
          </div>

          <p className="ft-social-meta">
            Sube entrenos, PRs y recetas. Tu gente lo ve desde tu gimnasio… y desde cualquier otro.
          </p>
        </div>
      </div>
    </motion.section>


    {/* SECTION 6 – CONTACTO, BETA E INVERSORES */}
    <motion.section
      className="ft-section ft-bottom ft-section--compact"
      {...sectionAnim}
      id="beta"
    >
      <div className="ft-bottom-grid">
        <div className="ft-bottom-card ft-bottom-card--full">
          <h2>Beta Privada</h2>

          <p>
            Fitera está en fase de beta privada con un grupo reducido de usuarios,
            gimnasios y entrenadores que nos ayudan a pulir la experiencia real.
          </p>

          <p>
            Si quieres <strong>probar la app</strong>, usarla en tu gimnasio,
            proponer una <strong>colaboración</strong> o hablar sobre
            <strong> inversión / partnerships</strong>, puedes escribirnos
            directamente al equipo.
          </p>

       

          <div className="ft-bottom-email">
            <span className="ft-bottom-email-label">Correo de contacto</span>
            <a
              href="mailto:fitera.contact@gmail.com?subject=Contacto%20Fitera"
              className="ft-bottom-email-link"
            >
              fitera.contact@gmail.com
            </a>
          </div>

          <p className="ft-small">
            Cuéntanos brevemente quién eres (usuario, entrenador, gimnasio,
            inversor, etc.) y qué te gustaría hacer con Fitera. Te responderemos
            personalmente desde el propio equipo.
          </p>
        </div>
      </div>
    </motion.section>


      </main>

      <footer className="ft-footer">
        <span>© {new Date().getFullYear()} Fitera</span>
      </footer>
      <Analytics />
    </div>
  );
}

export default App;
