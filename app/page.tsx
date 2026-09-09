"use client";

import React, { useState } from "react";

// ================= ICONOGRAFÍA EXACTA DE LA IMAGEN DE REFERENCIA =================

// 1. Icono Casa / Dashboard (Sólido azul con chimenea y puerta recortada)
function DashboardHomeIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2.1L2.5 10.2c-.4.3-.5.9-.2 1.3.3.4.9.5 1.3.2L12 4.6l8.4 7.1c.2.2.4.2.7.2.3 0 .5-.1.7-.3.4-.4.3-1-.1-1.3L12 2.1z" />
      <path d="M5 11.5V20c0 1.1.9 2 2 2h4v-6h2v6h4c1.1 0 2-.9 2-2v-8.5l-7-5.9-7 5.9z" />
    </svg>
  );
}

// 2. Icono Cartera / Bolsa (Orders / Pedidos)
function OrdersIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M18 6h-2c0-2.2-1.8-4-4-4S8 3.8 8 6H6c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2zm-6-2c1.1 0 2 .9 2 2h-4c0-1.1.9-2 2-2zm6 16H6V8h2v2c0 .6.4 1 1 1s1-.4 1-1V8h4v2c0 .6.4 1 1 1s1-.4 1-1V8h2v12z" />
    </svg>
  );
}

// 3. Icono Mano sosteniendo producto (Products / Productos de la referencia)
function ProductsIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2l5 2.5v4.5L12 11.5 7 9V4.5L12 2z" />
      <path d="M2 14.5c2.5 0 5-1 7-2.5l3 2c-1.5 2-3 3-5 3H2v-2.5z" opacity="0.85" />
      <path d="M7 17l4 4h9c1.1 0 2-.9 2-2v-3.5c0-1.5-1-2.5-2.5-2.5h-5.5" />
    </svg>
  );
}

// 4. Icono Gráfica de 3 Barras (Analytics / Análisis)
function AnalyticsIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <rect x="3.5" y="11" width="3.5" height="10" rx="1.5" />
      <rect x="10.25" y="4" width="3.5" height="17" rx="1.5" />
      <rect x="17" y="8" width="3.5" height="13" rx="1.5" />
    </svg>
  );
}

// 5. Icono Megáfono (Marketing)
function MarketingIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M18 11V9.5c0-.8-.7-1.5-1.5-1.5h-2L9.8 4.2C9.4 3.9 8.9 4.1 8.9 4.6V8H5c-1.1 0-2 .9-2 2v2c0 1.1.9 2 2 2h3.9v3.4c0 .5.5.7.9.4L14.5 14h2c.8 0 1.5-.7 1.5-1.5V11z" />
      <path d="M20 7.5c1.4 1.2 2 3 2 4.5s-.6 3.3-2 4.5l-.7-.7c1.2-1 1.7-2.4 1.7-3.8s-.5-2.8-1.7-3.8l.7-.7z" />
    </svg>
  );
}

// 6. Icono Burbuja de Chat (Messages / Mensajes)
function MessagesIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2z" />
    </svg>
  );
}

// 7. Icono Carrito de Compras (Total Sales)
function CartIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zM1 2v2h2l3.6 7.59-1.35 2.45c-.16.28-.25.61-.25.96 0 1.1.9 2 2 2h12v-2H7.42c-.14 0-.25-.11-.25-.25l.03-.12.9-1.63h7.45c.75 0 1.41-.41 1.75-1.03l3.58-6.49c.08-.14.12-.31.12-.48 0-.55-.45-1-1-1H5.21l-.94-2H1zm16 16c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2z" />
    </svg>
  );
}

// 8. Icono Dos Personas (Total Visitors)
function TwoUsersIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M16.5 12c1.38 0 2.49-1.12 2.49-2.5S17.88 7 16.5 7C15.12 7 14 8.12 14 9.5s1.12 2.5 2.5 2.5zM9 11c1.66 0 2.99-1.34 2.99-3S10.66 5 9 5C7.34 5 6 6.34 6 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm7.5 1c-.26 0-.56.02-.88.06 1.12.83 1.88 1.98 1.88 3.44V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z" />
    </svg>
  );
}

// 9. Icono Bolsa de Compras con asas circulares (Total Orders)
function TotalOrdersIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M19 6h-3c0-2.21-1.79-4-4-4S8 3.79 8 6H5c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2zm-7-2c1.1 0 2 .9 2 2h-4c0-1.1.9-2 2-2zm7 16H5V8h3v2c0 .55.45 1 1 1s1-.45 1-1V8h4v2c0 .55.45 1 1 1s1-.45 1-1V8h3v12z" />
    </svg>
  );
}

// 10. Icono Cerrar Sesión
function LogoutIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
      <polyline points="16 17 21 12 16 7" />
      <line x1="21" y1="12" x2="9" y2="12" />
    </svg>
  );
}

// 11. Icono Campana con Badge '1' en azul
function NotificationBellWithBadge() {
  return (
    <div className="relative inline-flex items-center justify-center cursor-pointer hover:opacity-80 transition-opacity">
      <svg className="w-[18px] h-[18px] text-slate-400" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 22c1.1 0 2-.9 2-2h-4c0 1.1.9 2 2 2zm6-6v-5c0-3.07-1.63-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.64 5.36 6 7.92 6 11v5l-2 2v1h16v-1l-2-2z" />
      </svg>
      <span className="absolute -top-1.5 -right-2 w-4 h-4 bg-[#4E47FF] text-white text-[9px] font-black rounded-full flex items-center justify-center ring-2 ring-white">
        1
      </span>
    </div>
  );
}

// Hexágono geométrico amarillo exacto con letra R
function HexagonLogo() {
  return (
    <div className="w-[34px] h-[34px] relative flex items-center justify-center">
      <svg viewBox="0 0 100 100" className="w-full h-full drop-shadow-sm">
        <polygon points="50 3, 93 25, 93 75, 50 97, 7 75, 7 25" fill="#F5A623" />
      </svg>
      <span className="absolute font-black text-white text-base tracking-tighter select-none">R</span>
    </div>
  );
}

export default function DashboardPage() {
  const [activeMenu, setActiveMenu] = useState("Dashboard");
  const [selectedDay, setSelectedDay] = useState(21);
  const [hoveredPoint, setHoveredPoint] = useState<number | null>(null);

  // Menú con iconos idénticos al screenshot original
  const menuItems = [
    { name: "Dashboard", icon: DashboardHomeIcon, hasSubmenu: false },
    { name: "Pedidos", icon: OrdersIcon, hasSubmenu: true },
    { name: "Productos", icon: ProductsIcon, hasSubmenu: true },
    { name: "Análisis", icon: AnalyticsIcon, hasSubmenu: false },
    { name: "Marketing", icon: MarketingIcon, hasSubmenu: true },
    { name: "Mensajes", icon: MessagesIcon, badge: "25", hasSubmenu: false },
  ];

  // Integraciones
  const integrations = [
    {
      name: "Jira",
      icon: (
        <svg className="w-3.5 h-3.5 text-[#0052CC]" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12.002 2L6 8.002l6.002 6.002L18.004 8.002 12.002 2zm-5.002 5L1 13l6.002 6.002L13.004 13 7 7zm10.004 0L11 13l6.002 6.002L23.004 13l-6.002-6z" />
        </svg>
      ),
    },
    {
      name: "Slack",
      icon: (
        <div className="grid grid-cols-2 gap-0.5 w-3.5 h-3.5">
          <span className="w-1.5 h-1.5 rounded-xs bg-[#E01E5A]"></span>
          <span className="w-1.5 h-1.5 rounded-xs bg-[#36C5F0]"></span>
          <span className="w-1.5 h-1.5 rounded-xs bg-[#ECB22E]"></span>
          <span className="w-1.5 h-1.5 rounded-xs bg-[#2EB67D]"></span>
        </div>
      ),
    },
    {
      name: "Intercom",
      icon: (
        <div className="w-3.5 h-3.5 rounded bg-[#1F8CEB] flex items-center justify-center text-white text-[9px] font-black">
          i
        </div>
      ),
    },
  ];

  const calendarDays = [21, 22, 23, 24, 25];

  // Curva de la gráfica ajustada a la referencia:
  // Inicio bajo en 0, sube suavemente a ~7, baja a ~2, sube a ~8, baja a ~3, y subida empinada al final hasta ~15
  const chartPoints = [
    { x: 25, y: 145, val: "0", label: "00:00" },
    { x: 95, y: 85, val: "6.8k", label: "04:00" },
    { x: 165, y: 125, val: "2.1k", label: "08:00" },
    { x: 235, y: 80, val: "7.9k", label: "12:00" },
    { x: 305, y: 120, val: "3.2k", label: "16:00" },
    { x: 385, y: 30, val: "15.0k", label: "20:00" },
  ];

  return (
    <div className="min-h-screen bg-[#F0F2F9] text-[#64748B] font-sans p-2 sm:p-5 lg:p-7 flex items-center justify-center antialiased">
      {/* Marco Exterior Blanco con bordes redondeados idénticos a la referencia */}
      <div className="w-full max-w-[1240px] bg-white rounded-[32px] shadow-[0_10px_40px_rgba(0,0,0,0.04)] border border-slate-100 flex flex-col lg:flex-row overflow-hidden">
        
        {/* ================= BARRA LATERAL COMPACTA (SIDEBAR) ================= */}
        <aside className="w-full lg:w-[225px] bg-white p-6 border-b lg:border-b-0 lg:border-r border-slate-100 flex flex-col justify-between shrink-0">
          <div>
            {/* Header del Sidebar: Logo Hexágono Amarillo + Flecha Circular */}
            <div className="flex items-center justify-between mb-7">
              <div className="flex items-center gap-2">
                <HexagonLogo />
                <span className="text-[22px] font-extrabold tracking-tight text-[#1E293B]">flex</span>
              </div>
              
              <button 
                type="button"
                aria-label="Colapsar"
                className="w-6 h-6 rounded-full border border-slate-200 flex items-center justify-center text-slate-400 hover:text-slate-600 hover:border-slate-300 transition-colors"
              >
                <svg className="w-3 h-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <polyline points="15 18 9 12 15 6" />
                </svg>
              </button>
            </div>

            {/* Menú Principal Compacto */}
            <div className="mb-6">
              <span className="text-[10px] font-bold tracking-wider text-slate-400 uppercase block mb-2 px-2.5">
                Menú
              </span>
              <nav className="space-y-1">
                {menuItems.map((item) => {
                  const isActive = activeMenu === item.name;
                  const IconComponent = item.icon;
                  return (
                    <button
                      key={item.name}
                      onClick={() => setActiveMenu(item.name)}
                      className={`w-full flex items-center justify-between px-3.5 py-2.5 rounded-2xl text-[12.5px] font-bold transition-all duration-150 group ${
                        isActive
                          ? "bg-[#4E47FF] text-white shadow-[0_8px_20px_-4px_rgba(78,71,255,0.4)]"
                          : "text-slate-500 hover:text-slate-800 hover:bg-slate-50/80"
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <IconComponent
                          className={`w-4 h-4 transition-transform group-hover:scale-105 ${
                            isActive ? "text-white" : "text-slate-400 group-hover:text-slate-700"
                          }`}
                        />
                        <span>{item.name}</span>
                      </div>

                      <div className="flex items-center gap-1">
                        {item.badge && (
                          <span className="bg-[#10B981] text-white text-[9px] font-black px-1.5 py-0.5 rounded-full">
                            {item.badge}
                          </span>
                        )}
                        {item.hasSubmenu && (
                          <svg
                            className={`w-3 h-3 transition-transform ${
                              isActive ? "text-white" : "text-slate-300 group-hover:text-slate-500"
                            }`}
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2.5"
                          >
                            <polyline points="6 9 12 15 18 9" />
                          </svg>
                        )}
                      </div>
                    </button>
                  );
                })}
              </nav>
            </div>

            {/* Integraciones Compacto */}
            <div>
              <span className="text-[10px] font-bold tracking-wider text-slate-400 uppercase block mb-2 px-2.5">
                Integraciones
              </span>
              <div className="space-y-0.5">
                {integrations.map((item) => (
                  <button
                    key={item.name}
                    className="w-full flex items-center gap-3 px-3.5 py-2 rounded-xl text-[12.5px] font-semibold text-slate-500 hover:text-slate-800 hover:bg-slate-50 transition-colors"
                  >
                    {item.icon}
                    <span>{item.name}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Botón de Cerrar Sesión */}
          <div className="pt-4 border-t border-slate-100">
            <button className="flex items-center gap-2.5 px-3 py-1.5 text-slate-400 hover:text-rose-600 text-[12px] font-bold rounded-xl hover:bg-rose-50/60 transition-all group w-full">
              <LogoutIcon className="w-3.5 h-3.5 text-slate-400 group-hover:text-rose-600 transition-colors" />
              <span>Cerrar sesión</span>
            </button>
          </div>
        </aside>

        {/* ================= CONTENEDOR PRINCIPAL ================= */}
        <div className="flex-1 flex flex-col bg-[#F9FAFD] overflow-y-auto">
          
          {/* Header Superior con dimensiones exactas */}
          <header className="h-16 px-6 lg:px-8 flex items-center justify-between border-b border-slate-100/70 bg-white/60 backdrop-blur-sm sticky top-0 z-20">
            {/* Buscador Píldora Compacto (largo medio exacto) */}
            <div className="relative w-60 sm:w-72">
              <svg className="w-3.5 h-3.5 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <circle cx="11" cy="11" r="8" />
                <path d="m21 21-4.3-4.3" />
              </svg>
              <input
                type="text"
                placeholder="Buscar..."
                className="w-full bg-[#F2F4FA] text-slate-700 text-xs rounded-full pl-9 pr-3 py-1.5 outline-none border border-transparent focus:border-[#4E47FF]/40 focus:bg-white transition-all"
              />
            </div>

            {/* Acciones de Cabecera: Notificaciones, Saldo y Perfil */}
            <div className="flex items-center gap-5">
              {/* Notificación con badge '1' */}
              <NotificationBellWithBadge />

              {/* Saldo de Cuenta */}
              <div className="text-right hidden sm:block">
                <span className="text-[10px] text-slate-400 font-medium block leading-none mb-0.5">Tu Saldo</span>
                <span className="text-xs font-black text-[#4E47FF] leading-none">$5.456</span>
              </div>

              {/* Avatar circular con borde y foto de Lay */}
              <div className="flex items-center gap-2 pl-2">
                <div className="w-8 h-8 rounded-full ring-2 ring-amber-500/80 p-0.5 shadow-xs flex items-center justify-center overflow-hidden bg-amber-100">
                  <span className="text-sm select-none">🧔🏽</span>
                </div>
                <span className="text-[11.5px] font-bold text-slate-700 hidden sm:inline">Hola, Lay</span>
              </div>
            </div>
          </header>

          {/* Área de Contenido del Dashboard */}
          <main className="p-5 lg:p-7 space-y-5">
            
            {/* Fila Superior: Título Dashboard + Este Mes + Botón Verde con sombra */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div className="flex items-center gap-2.5">
                <div className="w-9 h-9 rounded-xl bg-[#4E47FF] flex items-center justify-center text-white shadow-md shadow-[#4E47FF]/30">
                  <DashboardHomeIcon className="w-4 h-4" />
                </div>
                <h1 className="text-xl font-black text-[#1E293B] tracking-tight">Dashboard</h1>
              </div>

              <div className="flex items-center gap-2.5">
                {/* Selector de Período Temporal */}
                <button className="flex items-center gap-2 bg-white border border-slate-200/90 hover:border-slate-300 px-3.5 py-1.5 rounded-xl text-xs font-bold text-slate-600 shadow-2xs transition-all hover:bg-slate-50">
                  <svg className="w-3.5 h-3.5 text-slate-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <rect x="3" y="4" width="18" height="18" rx="2" />
                    <line x1="16" y1="2" x2="16" y2="6" />
                    <line x1="8" y1="2" x2="8" y2="6" />
                    <line x1="3" y1="10" x2="21" y2="10" />
                  </svg>
                  <span>Este Mes</span>
                  <svg className="w-3 h-3 text-slate-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <polyline points="6 9 12 15 18 9" />
                  </svg>
                </button>

                {/* Botón Verde Descargar Reporte con Sombra Verde Marcada */}
                <button className="flex items-center gap-2 bg-[#10B981] hover:bg-[#059669] text-white text-xs font-bold px-4 py-1.5 rounded-xl shadow-[0_8px_20px_-3px_rgba(16,185,129,0.45)] hover:scale-[1.02] active:scale-[0.98] transition-all">
                  <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                    <polyline points="7 10 12 15 17 10" />
                    <line x1="12" y1="15" x2="12" y2="3" />
                  </svg>
                  <span>Descargar Reporte</span>
                </button>
              </div>
            </div>

            {/* 3 Tarjetas de Métricas Estadísticas Superiores */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-5">
              
              {/* Card 1: Ventas Totales */}
              <div className="bg-white p-4 lg:p-5 rounded-2xl border border-slate-100 shadow-[0_2px_12px_rgba(0,0,0,0.02)] flex items-center gap-3.5">
                <div className="w-10 h-10 rounded-2xl bg-[#EEF0FF] flex items-center justify-center text-[#4E47FF] shrink-0">
                  <CartIcon className="w-4 h-4 text-[#4E47FF]" />
                </div>
                <div>
                  <span className="text-[11px] font-semibold text-slate-400 block mb-0.5">Ventas Totales</span>
                  <div className="flex items-baseline gap-2">
                    <span className="text-xl font-extrabold text-[#1E293B] tracking-tight">263k</span>
                    <span className="inline-flex items-center text-[10.5px] font-bold text-[#10B981]">
                      ↑ 15.6%
                    </span>
                  </div>
                </div>
              </div>

              {/* Card 2: Visitantes Totales */}
              <div className="bg-white p-4 lg:p-5 rounded-2xl border border-slate-100 shadow-[0_2px_12px_rgba(0,0,0,0.02)] flex items-center gap-3.5">
                <div className="w-10 h-10 rounded-2xl bg-[#EEF0FF] flex items-center justify-center text-[#4E47FF] shrink-0">
                  <TwoUsersIcon className="w-4 h-4 text-[#4E47FF]" />
                </div>
                <div>
                  <span className="text-[11px] font-semibold text-slate-400 block mb-0.5">Visitantes Totales</span>
                  <div className="flex items-baseline gap-2">
                    <span className="text-xl font-extrabold text-[#1E293B] tracking-tight">35k</span>
                    <span className="inline-flex items-center text-[10.5px] font-bold text-[#EF4444]">
                      ↓ 6.2%
                    </span>
                  </div>
                </div>
              </div>

              {/* Card 3: Pedidos Totales */}
              <div className="bg-white p-4 lg:p-5 rounded-2xl border border-slate-100 shadow-[0_2px_12px_rgba(0,0,0,0.02)] flex items-center gap-3.5">
                <div className="w-10 h-10 rounded-2xl bg-[#EEF0FF] flex items-center justify-center text-[#4E47FF] shrink-0">
                  <TotalOrdersIcon className="w-4 h-4 text-[#4E47FF]" />
                </div>
                <div>
                  <span className="text-[11px] font-semibold text-slate-400 block mb-0.5">Pedidos Totales</span>
                  <div className="flex items-baseline gap-2">
                    <span className="text-xl font-extrabold text-[#1E293B] tracking-tight">165k</span>
                    <span className="inline-flex items-center text-[10.5px] font-bold text-[#10B981]">
                      ↑ 3.5%
                    </span>
                  </div>
                </div>
              </div>

            </div>

            {/* Sección Central Dividida en Dos Columnas */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-5">
              
              {/* Columna Izquierda (7 cols): Sesiones de la Tienda Online */}
              <div className="lg:col-span-7 bg-white p-5 lg:p-6 rounded-3xl border border-slate-100 shadow-[0_2px_12px_rgba(0,0,0,0.02)] flex flex-col justify-between">
                <div>
                  {/* Título de Sesiones + Botón Ver Reporte */}
                  <div className="flex items-center justify-between mb-3">
                    <h2 className="text-[13.5px] font-bold text-[#1E293B]">Sesiones de la Tienda Online</h2>
                    <button className="text-[10.5px] font-semibold text-slate-400 border border-slate-200/90 rounded-xl px-2.5 py-1 hover:bg-slate-50 hover:text-slate-800 transition-colors">
                      Ver Reporte
                    </button>
                  </div>

                  {/* Detalle Visitantes 68 y porcentajes */}
                  <div className="flex items-center justify-between py-1.5 border-b border-slate-100/70 mb-3">
                    <div className="flex items-center gap-2.5">
                      <div className="w-8 h-8 rounded-xl bg-[#EEF0FF] flex items-center justify-center text-[#4E47FF]">
                        <TwoUsersIcon className="w-3.5 h-3.5 text-[#4E47FF]" />
                      </div>
                      <div>
                        <span className="text-[9px] uppercase font-bold tracking-wider text-slate-400 block leading-none mb-0.5">Visitantes</span>
                        <span className="text-xl font-black text-[#1E293B] leading-none">68</span>
                      </div>
                    </div>

                    <div className="flex items-center gap-3 text-[11px] font-bold">
                      <span className="inline-flex items-center text-[#10B981]">
                        ↑ 15.6%
                      </span>
                      <div className="flex items-center gap-1">
                        <span className="text-[#4E47FF] font-black text-xs">26</span>
                        <span className="inline-flex items-center text-[#EF4444] text-[10px]">
                          ↓ 1.6%
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Selector de Mes: Sesiones en el Tiempo */}
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[11.5px] font-bold text-slate-700">Sesiones en el Tiempo</span>
                    <button className="flex items-center gap-1 text-[10.5px] font-semibold text-slate-500 bg-slate-50/70 border border-slate-200/80 rounded-lg px-2 py-0.5 hover:bg-slate-100 transition-colors">
                      <svg className="w-3 h-3 text-slate-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <rect x="3" y="4" width="18" height="18" rx="2" />
                        <line x1="16" y1="2" x2="16" y2="6" />
                        <line x1="8" y1="2" x2="8" y2="6" />
                      </svg>
                      <span>Febrero</span>
                      <svg className="w-3 h-3 text-slate-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                        <polyline points="6 9 12 15 18 9" />
                      </svg>
                    </button>
                  </div>

                  {/* Gráfico Curvo: línea fina, curva fiel y puntos sutiles */}
                  <div className="relative h-40 w-full pt-1">
                    {/* Líneas horizontales de guía */}
                    <div className="absolute inset-0 flex flex-col justify-between pointer-events-none text-[9px] font-semibold text-slate-300">
                      <div className="flex items-center gap-2">
                        <span className="w-4">15</span>
                        <div className="flex-1 border-b border-slate-100"></div>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="w-4">10</span>
                        <div className="flex-1 border-b border-slate-100"></div>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="w-4">5</span>
                        <div className="flex-1 border-b border-slate-100"></div>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="w-4">0</span>
                        <div className="flex-1 border-b border-slate-100"></div>
                      </div>
                    </div>

                    {/* Curva SVG idéntica a la imagen original */}
                    <svg className="absolute inset-0 w-full h-full overflow-visible pl-5" viewBox="0 0 410 150" preserveAspectRatio="none">
                      <defs>
                        <linearGradient id="chartGradient" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="0%" stopColor="#4E47FF" stopOpacity="0.18" />
                          <stop offset="100%" stopColor="#4E47FF" stopOpacity="0.0" />
                        </linearGradient>
                      </defs>

                      {/* Área sombreada sutil */}
                      <path
                        d="M 25 145 C 50 145, 65 85, 95 85 C 125 85, 135 125, 165 125 C 195 125, 205 80, 235 80 C 265 80, 275 120, 305 120 C 335 120, 355 30, 385 30 L 385 145 Z"
                        fill="url(#chartGradient)"
                      />

                      {/* Línea azul morada continua fina */}
                      <path
                        d="M 25 145 C 50 145, 65 85, 95 85 C 125 85, 135 125, 165 125 C 195 125, 205 80, 235 80 C 265 80, 275 120, 305 120 C 335 120, 355 30, 385 30"
                        fill="none"
                        stroke="#4E47FF"
                        strokeWidth="2.2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />

                      {/* Puntos interactivos con Tooltips */}
                      {chartPoints.map((point, index) => (
                        <g key={index} className="cursor-pointer">
                          <circle
                            cx={point.x}
                            cy={point.y}
                            r={hoveredPoint === index ? 5 : 2.5}
                            className="fill-white stroke-[#4E47FF] stroke-[2] transition-all"
                            onMouseEnter={() => setHoveredPoint(index)}
                            onMouseLeave={() => setHoveredPoint(null)}
                          />
                        </g>
                      ))}
                    </svg>

                    {/* Tooltip Dinámico */}
                    {hoveredPoint !== null && (
                      <div
                        className="absolute z-10 bg-slate-800 text-white text-[10px] font-bold px-2 py-0.5 rounded shadow pointer-events-none transform -translate-x-1/2 -translate-y-7 transition-all"
                        style={{
                          left: `${(chartPoints[hoveredPoint].x / 410) * 100}%`,
                          top: `${(chartPoints[hoveredPoint].y / 150) * 100}%`,
                        }}
                      >
                        {chartPoints[hoveredPoint].val} visitas
                      </div>
                    )}
                  </div>
                </div>

                {/* Barra de Fechas del Calendario Inferior (Día 21 pequeño y elegante) */}
                <div className="flex items-center justify-center gap-2.5 mt-3 pt-2.5 border-t border-slate-100/60">
                  <button 
                    type="button"
                    aria-label="Anterior"
                    className="w-5 h-5 rounded-full border border-slate-200 flex items-center justify-center text-slate-400 hover:text-slate-600 transition-colors"
                  >
                    <svg className="w-2.5 h-2.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <polyline points="15 18 9 12 15 6" />
                    </svg>
                  </button>
                  <div className="flex items-center gap-2">
                    {calendarDays.map((day) => (
                      <button
                        key={day}
                        onClick={() => setSelectedDay(day)}
                        className={`w-6 h-6 rounded-full text-[11px] flex items-center justify-center transition-all ${
                          selectedDay === day
                            ? "bg-[#4E47FF] text-white font-bold shadow-[0_3px_8px_rgba(78,71,255,0.4)]"
                            : "text-slate-400 hover:text-slate-700 hover:bg-slate-100"
                        }`}
                      >
                        {day}
                      </button>
                    ))}
                  </div>
                  <button 
                    type="button"
                    aria-label="Siguiente"
                    className="w-5 h-5 rounded-full border border-slate-200 flex items-center justify-center text-slate-400 hover:text-slate-600 transition-colors"
                  >
                    <svg className="w-2.5 h-2.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <polyline points="9 18 15 12 9 6" />
                    </svg>
                  </button>
                </div>
              </div>

              {/* Columna Derecha (5 cols): Banner Morado + Módulo CONVERSIÓN */}
              <div className="lg:col-span-5 flex flex-col gap-5">
                
                {/* Banner Promocional Morado con Ilustración Fiel (caminos oscuros y nubes) */}
                <div className="bg-gradient-to-r from-[#4E47FF] to-[#3B30E8] p-5 rounded-3xl text-white shadow-[0_8px_25px_-5px_rgba(78,71,255,0.35)] relative overflow-hidden flex flex-col justify-between min-h-[160px]">
                  {/* Ilustración Vectorial Fiel con caminos oscuros ondulados, nubes y cohete */}
                  <div className="absolute right-0 bottom-0 pointer-events-none select-none">
                    <svg className="w-36 h-36" viewBox="0 0 160 160" fill="none">
                      {/* Caminos oscuros / senderos */}
                      <path d="M125 160 C 125 110, 145 80, 130 35" stroke="#1E1B4B" strokeWidth="8" strokeLinecap="round" />
                      <path d="M95 160 C 95 120, 105 90, 100 60" stroke="#1E1B4B" strokeWidth="6" strokeLinecap="round" />
                      {/* Cohete estilizado ascendente */}
                      <path d="M130 18 L137 32 L123 32 Z" fill="#FFFFFF" />
                      <circle cx="130" cy="27" r="2.5" fill="#EF4444" />
                      <polygon points="100,50 106,60 94,60" fill="#FFFFFF" />
                      {/* Nube blanca en la base */}
                      <ellipse cx="65" cy="135" rx="10" ry="5" fill="#FFFFFF" opacity="0.35" />
                      <ellipse cx="140" cy="115" rx="8" ry="4" fill="#FFFFFF" opacity="0.25" />
                    </svg>
                  </div>

                  <div className="relative z-10 max-w-[200px]">
                    <h3 className="text-[14px] font-black tracking-tight mb-1 leading-tight">¿Necesitas más estadísticas?</h3>
                    <p className="text-[10px] text-indigo-100 font-medium leading-normal mb-3">
                      Actualiza a versión pro para beneficios adicionales.
                    </p>
                  </div>

                  <div className="relative z-10">
                    <button className="bg-[#10B981] hover:bg-[#059669] text-white text-[11px] font-bold px-3.5 py-1.5 rounded-xl flex items-center gap-1.5 shadow-[0_6px_15px_-3px_rgba(16,185,129,0.5)] hover:scale-[1.02] active:scale-[0.98] transition-all">
                      <div className="w-3.5 h-3.5 rounded-full border border-white flex items-center justify-center">
                        <svg className="w-2 h-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                          <line x1="7" y1="17" x2="17" y2="7" />
                          <polyline points="7 7 17 7 17 17" />
                        </svg>
                      </div>
                      <span>Ir a Pro ahora</span>
                    </button>
                  </div>
                </div>

                {/* Módulo Conversión Fiel: arco grande semicircular y textos exactos */}
                <div className="bg-white p-5 rounded-3xl border border-slate-100 shadow-[0_2px_12px_rgba(0,0,0,0.02)] flex flex-col justify-between">
                  <div className="flex items-center justify-between mb-0.5">
                    <h3 className="text-[13px] font-bold text-[#1E293B]">Conversión</h3>
                  </div>

                  {/* Gráfico de Medio Anillo con proporción amplia idéntica a la referencia */}
                  <div className="relative flex flex-col items-center justify-center pt-1">
                    <svg className="w-56 h-28 overflow-visible" viewBox="0 0 200 105">
                      {/* Segmento inactivo azul claro suave (41.81%) */}
                      <path
                        d="M 148 42 A 80 80 0 0 1 180 100"
                        fill="none"
                        stroke="#EEF0FF"
                        strokeWidth="24"
                        strokeLinecap="round"
                      />
                      {/* Segmento activo morado intenso (58.19%) */}
                      <path
                        d="M 20 100 A 80 80 0 0 1 148 42"
                        fill="none"
                        stroke="#4E47FF"
                        strokeWidth="24"
                        strokeLinecap="round"
                      />
                    </svg>

                    {/* Porcentaje Central y Crecimiento */}
                    <div className="text-center -mt-7 mb-1.5">
                      <span className="text-[26px] font-black text-[#1E293B] block tracking-tight leading-none">58,19%</span>
                      <span className="inline-flex items-center text-[10.5px] font-bold text-[#10B981] mt-1">
                        ↑ 3.5%
                      </span>
                    </div>
                  </div>

                  {/* Resumen Inferior: Ingresos ($542,317) y Gastos ($497,456) */}
                  <div className="grid grid-cols-2 gap-3 pt-2.5 border-t border-slate-100 mt-1">
                    <div className="flex items-center gap-2">
                      <span className="text-[#10B981] text-xs font-bold">✓</span>
                      <div>
                        <span className="text-[9.5px] font-semibold text-slate-400 block leading-tight">Ingresos</span>
                        <span className="text-xs font-black text-[#1E293B] leading-tight">$542,317</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-slate-400 text-xs font-bold">↗</span>
                      <div>
                        <span className="text-[9.5px] font-semibold text-slate-400 block leading-tight">Gastos</span>
                        <span className="text-xs font-black text-[#1E293B] leading-tight">$497,456</span>
                      </div>
                    </div>
                  </div>
                </div>

              </div>

            </div>

          </main>
        </div>

      </div>
    </div>
  );
}


