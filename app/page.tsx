"use client";

import React, { useState } from "react";

// ================= ICONOS MILIMÉTRICOS EXACTOS DE LA IMAGEN DE REFERENCIA =================

// 1. Icono Casa / Dashboard (techo puntiagudo con chimenea pequeña y base)
function HomeIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2.5L2 11h3v9a1 1 0 001 1h4v-6h4v6h4a1 1 0 001-1v-9h3L12 2.5z" />
    </svg>
  );
}

// 2. Icono Cartera / Bolsa de Compras (Orders / Pedidos)
function ShoppingBagIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M6 3h12l2 5v12a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V8l2-5z" />
      <path d="M3 8h18" />
      <path d="M16 12a4 4 0 0 1-8 0" />
    </svg>
  );
}

// 3. Icono Mano sosteniendo producto / caja de regalo (Products / Productos del diseño)
function ProductHandIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
      {/* Caja cúbica arriba */}
      <path d="M12 2l5 2.5v4.5L12 11.5 7 9V4.5L12 2z" />
      <path d="M12 6.5v5" />
      {/* Mano estilizada abajo que sostiene la caja */}
      <path d="M2 14.5c2.5 0 5-1 7-2.5l3 2c-1.5 2-3 3-5 3H2v-2.5z" />
      <path d="M7 17l4 4h9a2 2 0 0 0 2-2v-3.5c0-1.5-1-2.5-2.5-2.5h-5.5" />
    </svg>
  );
}

// 4. Icono Gráfico de Barras con flecha / barras verticales (Analytics / Análisis)
function AnalyticsIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <rect x="3" y="12" width="3.5" height="9" rx="1.2" />
      <rect x="10" y="4" width="3.5" height="17" rx="1.2" />
      <rect x="17" y="9" width="3.5" height="12" rx="1.2" />
    </svg>
  );
}

// 5. Icono Megáfono / Altavoz (Marketing)
function MarketingIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M11 5L6 9H2v6h4l5 4V5z" />
      <path d="M15.54 8.46a5 5 0 0 1 0 7.07" />
      <path d="M18.5 5.5a8.5 8.5 0 0 1 0 13" />
    </svg>
  );
}

// 6. Icono Burbuja de Chat / Mensajes (Messages)
function MessagesIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2z" />
    </svg>
  );
}

// 7. Icono Carrito de Compras (Total Sales)
function CartIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="9" cy="20" r="1.5" fill="currentColor" />
      <circle cx="18" cy="20" r="1.5" fill="currentColor" />
      <path d="M1 1h4l2.6 13.4a2 2 0 0 0 2 1.6h9.8a2 2 0 0 0 2-1.6L23 5H6" />
    </svg>
  );
}

// 8. Icono Dos Personas / Visitantes (Total Visitors)
function TwoUsersIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z" />
    </svg>
  );
}

// 9. Icono Bolsa de Pedidos con detalle (Total Orders)
function OrdersBagIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M18 6h-2c0-2.21-1.79-4-4-4S8 3.79 8 6H6c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2zm-6-2c1.1 0 2 .9 2 2h-4c0-1.1.9-2 2-2zm6 16H6V8h2v2c0 .55.45 1 1 1s1-.45 1-1V8h4v2c0 .55.45 1 1 1s1-.45 1-1V8h2v12z" />
    </svg>
  );
}

// 10. Icono Cerrar Sesión (Logout)
function LogoutIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
      <polyline points="16 17 21 12 16 7" />
      <line x1="21" y1="12" x2="9" y2="12" />
    </svg>
  );
}

// 11. Icono Campana de Notificaciones con 1 burbuja (con '1' adentro)
function NotificationBellWithBadge({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <div className="relative inline-flex items-center justify-center">
      <svg className={className} viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 22c1.1 0 2-.9 2-2h-4c0 1.1.9 2 2 2zm6-6v-5c0-3.07-1.63-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.64 5.36 6 7.92 6 11v5l-2 2v1h16v-1l-2-2z" />
      </svg>
      {/* Badge azul con número 1 */}
      <span className="absolute -top-1.5 -right-1.5 w-4 h-4 bg-[#4E47FF] text-white text-[9px] font-black rounded-full flex items-center justify-center ring-2 ring-white">
        1
      </span>
    </div>
  );
}

export default function DashboardPage() {
  const [activeMenu, setActiveMenu] = useState("Dashboard");
  const [selectedDay, setSelectedDay] = useState(21);
  const [hoveredPoint, setHoveredPoint] = useState<number | null>(null);

  // Menú con iconos idénticos al screenshot original
  const menuItems = [
    { name: "Dashboard", icon: HomeIcon, hasSubmenu: false },
    { name: "Pedidos", icon: ShoppingBagIcon, hasSubmenu: true },
    { name: "Productos", icon: ProductHandIcon, hasSubmenu: true },
    { name: "Análisis", icon: AnalyticsIcon, hasSubmenu: false },
    { name: "Marketing", icon: MarketingIcon, hasSubmenu: true },
    { name: "Mensajes", icon: MessagesIcon, badge: "25", hasSubmenu: false },
  ];

  // Integraciones
  const integrations = [
    {
      name: "Jira",
      icon: (
        <svg className="w-4 h-4 text-[#0052CC]" viewBox="0 0 24 24" fill="currentColor">
          <path d="M11.53 2c0 2.4-1.97 4.35-4.38 4.35H4.8v2.35h2.35c3.7 0 6.7-3 6.7-6.7V2h-2.32zm0 7.05c0 2.4-1.97 4.35-4.38 4.35H4.8v2.35h2.35c3.7 0 6.7-3 6.7-6.7V9.05h-2.32zm0 7.05c0 2.4-1.97 4.35-4.38 4.35H4.8v2.35h2.35c3.7 0 6.7-3 6.7-6.7v-2.35h-2.32z" />
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
        <div className="w-4 h-4 rounded-md bg-[#1F8CEB] flex items-center justify-center text-white text-[10px] font-black">
          i
        </div>
      ),
    },
  ];

  // Días del calendario
  const calendarDays = [21, 22, 23, 24, 25];

  // Puntos del gráfico de curva interactivo con tooltips
  const chartPoints = [
    { x: 30, y: 145, val: "0", label: "00:00" },
    { x: 100, y: 80, val: "6.8k", label: "04:00" },
    { x: 170, y: 130, val: "1.2k", label: "08:00" },
    { x: 240, y: 75, val: "7.4k", label: "12:00" },
    { x: 310, y: 125, val: "2.1k", label: "16:00" },
    { x: 390, y: 25, val: "14.8k", label: "20:00" },
  ];

  return (
    <div className="min-h-screen bg-[#F0F2F9] text-[#555E75] font-sans p-3 sm:p-6 lg:p-10 flex items-center justify-center antialiased">
      {/* Marco Exterior Blanco con bordes ultra suaves */}
      <div className="w-full max-w-[1380px] bg-white rounded-[36px] shadow-[0_20px_60px_-15px_rgba(0,0,0,0.07)] border border-slate-100/80 flex flex-col lg:flex-row overflow-hidden">
        
        {/* ================= BARRA LATERAL (SIDEBAR) ================= */}
        <aside className="w-full lg:w-[250px] bg-white p-7 border-b lg:border-b-0 lg:border-r border-slate-100 flex flex-col justify-between shrink-0">
          <div>
            {/* Header del Sidebar: Logo Hexágono Amarillo + Botón Flecha Circular */}
            <div className="flex items-center justify-between mb-9">
              <div className="flex items-center gap-2.5">
                {/* Hexágono Amarillo con letra R */}
                <div className="w-9 h-9 bg-[#FBBF24] rounded-xl flex items-center justify-center shadow-md shadow-amber-300/40">
                  <span className="font-black text-white text-lg tracking-tighter">R</span>
                </div>
                <span className="text-2xl font-black tracking-tight text-[#1E293B]">flex</span>
              </div>
              
              {/* Botón circular flecha izquierda */}
              <button 
                type="button"
                aria-label="Colapsar"
                className="w-8 h-8 rounded-full border border-slate-200/90 flex items-center justify-center text-slate-400 hover:text-slate-600 hover:border-slate-300 transition-all shadow-xs"
              >
                <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <polyline points="15 18 9 12 15 6" />
                </svg>
              </button>
            </div>

            {/* Menú Principal */}
            <div className="mb-8">
              <span className="text-[11px] font-bold tracking-wider text-slate-400 uppercase block mb-3.5 px-3">
                Menú
              </span>
              <nav className="space-y-2">
                {menuItems.map((item) => {
                  const isActive = activeMenu === item.name;
                  const IconComponent = item.icon;
                  return (
                    <button
                      key={item.name}
                      onClick={() => setActiveMenu(item.name)}
                      className={`w-full flex items-center justify-between px-4 py-3 rounded-2xl text-[13px] font-bold transition-all duration-200 group ${
                        isActive
                          ? "bg-[#4E47FF] text-white shadow-[0_12px_28px_-6px_rgba(78,71,255,0.45)] scale-[1.01]"
                          : "text-slate-500 hover:text-slate-900 hover:bg-slate-50/80"
                      }`}
                    >
                      <div className="flex items-center gap-3.5">
                        <IconComponent
                          className={`w-4 h-4 transition-transform group-hover:scale-110 ${
                            isActive ? "text-white" : "text-slate-400 group-hover:text-slate-700"
                          }`}
                        />
                        <span>{item.name}</span>
                      </div>

                      <div className="flex items-center gap-1.5">
                        {item.badge && (
                          <span className="bg-[#10B981] text-white text-[10px] font-black px-2 py-0.5 rounded-full shadow-xs">
                            {item.badge}
                          </span>
                        )}
                        {item.hasSubmenu && (
                          <svg
                            className={`w-3.5 h-3.5 transition-transform ${
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

            {/* Integraciones */}
            <div>
              <span className="text-[11px] font-bold tracking-wider text-slate-400 uppercase block mb-3.5 px-3">
                Integraciones
              </span>
              <div className="space-y-1.5">
                {integrations.map((item) => (
                  <button
                    key={item.name}
                    className="w-full flex items-center gap-3.5 px-4 py-2.5 rounded-xl text-[13px] font-semibold text-slate-600 hover:text-slate-900 hover:bg-slate-50 transition-all duration-150"
                  >
                    {item.icon}
                    <span>{item.name}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Botón de Cerrar Sesión */}
          <div className="pt-6 border-t border-slate-100">
            <button className="flex items-center gap-3 px-3 py-2 text-slate-500 hover:text-rose-600 text-[13px] font-bold rounded-xl hover:bg-rose-50/60 transition-all group w-full">
              <LogoutIcon className="w-4 h-4 text-slate-400 group-hover:text-rose-600 transition-colors" />
              <span>Cerrar sesión</span>
            </button>
          </div>
        </aside>

        {/* ================= CONTENEDOR PRINCIPAL ================= */}
        <div className="flex-1 flex flex-col bg-[#F8F9FD] overflow-y-auto">
          
          {/* Header Superior con Buscador, Notificación, Balance y Avatar */}
          <header className="h-20 px-8 flex items-center justify-between border-b border-slate-100 bg-white/70 backdrop-blur-md sticky top-0 z-20">
            {/* Buscador de píldora redondeada */}
            <div className="relative w-72 md:w-88">
              <svg className="w-4 h-4 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <circle cx="11" cy="11" r="8" />
                <path d="m21 21-4.3-4.3" />
              </svg>
              <input
                type="text"
                placeholder="Buscar..."
                className="w-full bg-[#F1F3F9] text-slate-700 text-xs rounded-full pl-10 pr-4 py-2.5 outline-none border border-transparent focus:border-[#4E47FF]/50 focus:bg-white transition-all shadow-inner"
              />
            </div>

            {/* Acciones de la barra superior */}
            <div className="flex items-center gap-6">
              {/* Notificación con campana e indicador '1' */}
              <button 
                type="button"
                aria-label="Notificaciones"
                className="p-2 rounded-full hover:bg-slate-100 text-slate-400 hover:text-slate-600 transition-colors"
              >
                <NotificationBellWithBadge className="w-5 h-5 text-slate-400" />
              </button>

              {/* Saldo de Cuenta */}
              <div className="text-right hidden sm:block">
                <span className="text-[11px] text-slate-400 font-medium block leading-tight">Tu Saldo</span>
                <span className="text-sm font-black text-[#4E47FF] leading-tight">$5.456</span>
              </div>

              {/* Avatar y Saludo */}
              <div className="flex items-center gap-3 pl-3 border-l border-slate-200">
                <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-amber-500 to-orange-400 p-[2px] shadow-sm flex items-center justify-center">
                  <div className="w-full h-full rounded-full bg-[#3B2C24] flex items-center justify-center text-sm font-bold text-white overflow-hidden select-none">
                    🧔🏽
                  </div>
                </div>
                <div className="hidden sm:flex flex-col">
                  <span className="text-xs font-bold text-slate-800">Hola, Lay</span>
                </div>
              </div>
            </div>
          </header>

          {/* Área Central de Contenido */}
          <main className="p-7 md:p-9 space-y-6">
            
            {/* Fila Superior: Título Dashboard + Controles (Este Mes + Descargar Reporte) */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="flex items-center gap-3.5">
                <div className="w-11 h-11 rounded-2xl bg-[#4E47FF] flex items-center justify-center text-white shadow-lg shadow-[#4E47FF]/30">
                  <HomeIcon className="w-5 h-5" />
                </div>
                <h1 className="text-2xl font-black text-[#1E293B] tracking-tight">Dashboard</h1>
              </div>

              <div className="flex items-center gap-3">
                {/* Selector de Período Temporal */}
                <button className="flex items-center gap-2 bg-white border border-slate-200/90 hover:border-slate-300 px-4 py-2.5 rounded-xl text-xs font-bold text-slate-600 shadow-xs transition-all hover:bg-slate-50">
                  <svg className="w-3.5 h-3.5 text-slate-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                    <line x1="16" y1="2" x2="16" y2="6" />
                    <line x1="8" y1="2" x2="8" y2="6" />
                    <line x1="3" y1="10" x2="21" y2="10" />
                  </svg>
                  <span>Este Mes</span>
                  <svg className="w-3.5 h-3.5 text-slate-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <polyline points="6 9 12 15 18 9" />
                  </svg>
                </button>

                {/* Botón Verde Descargar Reporte */}
                <button className="flex items-center gap-2 bg-[#10B981] hover:bg-[#059669] text-white text-xs font-bold px-4 py-2.5 rounded-xl shadow-md shadow-[#10B981]/25 hover:shadow-lg hover:shadow-[#10B981]/35 hover:scale-[1.02] active:scale-[0.98] transition-all">
                  <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                    <polyline points="7 10 12 15 17 10" />
                    <line x1="12" y1="15" x2="12" y2="3" />
                  </svg>
                  <span>Descargar Reporte</span>
                </button>
              </div>
            </div>

            {/* 3 Tarjetas de Métricas Estadísticas */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              
              {/* Card 1: Ventas Totales */}
              <div className="bg-white p-5 rounded-2xl border border-slate-100/80 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.03)] hover:shadow-md transition-all flex items-center justify-between group">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-[#F0F2FD] flex items-center justify-center text-[#4E47FF] group-hover:scale-105 transition-transform">
                    <CartIcon className="w-5 h-5 text-[#4E47FF]" />
                  </div>
                  <div>
                    <span className="text-[12px] font-medium text-[#94A3B8] block mb-0.5">Ventas Totales</span>
                    <div className="flex items-baseline gap-2">
                      <span className="text-2xl font-bold text-[#1E293B] tracking-tight">263k</span>
                      <span className="inline-flex items-center text-[11px] font-bold text-[#10B981]">
                        ↑ 15.6%
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Card 2: Visitantes Totales */}
              <div className="bg-white p-5 rounded-2xl border border-slate-100/80 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.03)] hover:shadow-md transition-all flex items-center justify-between group">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-[#F0F2FD] flex items-center justify-center text-[#4E47FF] group-hover:scale-105 transition-transform">
                    <TwoUsersIcon className="w-5 h-5 text-[#4E47FF]" />
                  </div>
                  <div>
                    <span className="text-[12px] font-medium text-[#94A3B8] block mb-0.5">Visitantes Totales</span>
                    <div className="flex items-baseline gap-2">
                      <span className="text-2xl font-bold text-[#1E293B] tracking-tight">35k</span>
                      <span className="inline-flex items-center text-[11px] font-bold text-[#EF4444]">
                        ↓ 6.2%
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Card 3: Pedidos Totales */}
              <div className="bg-white p-5 rounded-2xl border border-slate-100/80 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.03)] hover:shadow-md transition-all flex items-center justify-between group">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-[#F0F2FD] flex items-center justify-center text-[#4E47FF] group-hover:scale-105 transition-transform">
                    <OrdersBagIcon className="w-5 h-5 text-[#4E47FF]" />
                  </div>
                  <div>
                    <span className="text-[12px] font-medium text-[#94A3B8] block mb-0.5">Pedidos Totales</span>
                    <div className="flex items-baseline gap-2">
                      <span className="text-2xl font-bold text-[#1E293B] tracking-tight">165k</span>
                      <span className="inline-flex items-center text-[11px] font-bold text-[#10B981]">
                        ↑ 3.5%
                      </span>
                    </div>
                  </div>
                </div>
              </div>

            </div>

            {/* Sección Inferior de Dos Columnas */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
              
              {/* Columna Izquierda (7 cols): Sesiones de la Tienda Online */}
              <div className="lg:col-span-7 bg-white p-6 rounded-3xl border border-slate-100/80 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.03)] flex flex-col justify-between">
                <div>
                  {/* Título de Sesiones + Botón Ver Reporte */}
                  <div className="flex items-center justify-between mb-4">
                    <h2 className="text-[14px] font-bold text-[#1E293B]">Sesiones de la Tienda Online</h2>
                    <button className="text-[11px] font-semibold text-slate-500 border border-slate-200/90 rounded-xl px-3 py-1 hover:bg-slate-50 hover:text-slate-900 transition-colors">
                      Ver Reporte
                    </button>
                  </div>

                  {/* Detalle Visitantes 68 y estadísticas */}
                  <div className="flex items-center justify-between py-2 border-b border-slate-100/70 mb-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-[#F0F2FD] flex items-center justify-center text-[#4E47FF]">
                        <TwoUsersIcon className="w-4 h-4 text-[#4E47FF]" />
                      </div>
                      <div>
                        <span className="text-[10px] uppercase font-bold tracking-wider text-slate-400 block">Visitantes</span>
                        <span className="text-2xl font-bold text-[#1E293B]">68</span>
                      </div>
                    </div>

                    <div className="flex items-center gap-4 text-xs font-bold">
                      <span className="inline-flex items-center text-[#10B981]">
                        ↑ 15.6%
                      </span>
                      <div className="flex items-center gap-1.5">
                        <span className="text-[#4E47FF] font-bold text-sm">26</span>
                        <span className="inline-flex items-center text-[#EF4444] text-[11px]">
                          ↓ 1.6%
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Selector de Mes: Sesiones en el Tiempo */}
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-bold text-slate-700">Sesiones en el Tiempo</span>
                    <button className="flex items-center gap-1.5 text-[11px] font-semibold text-slate-500 bg-slate-50/70 border border-slate-200/80 rounded-lg px-2.5 py-1 hover:bg-slate-100 transition-colors">
                      <svg className="w-3 h-3 text-slate-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                        <line x1="16" y1="2" x2="16" y2="6" />
                        <line x1="8" y1="2" x2="8" y2="6" />
                      </svg>
                      <span>Febrero</span>
                      <svg className="w-3 h-3 text-slate-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                        <polyline points="6 9 12 15 18 9" />
                      </svg>
                    </button>
                  </div>

                  {/* Gráfico Curvo Interactivo con SVG */}
                  <div className="relative h-44 w-full pt-2">
                    {/* Líneas horizontales de guía */}
                    <div className="absolute inset-0 flex flex-col justify-between pointer-events-none text-[10px] font-semibold text-slate-300">
                      <div className="flex items-center gap-2">
                        <span className="w-5">15</span>
                        <div className="flex-1 border-b border-slate-100"></div>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="w-5">10</span>
                        <div className="flex-1 border-b border-slate-100"></div>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="w-5">5</span>
                        <div className="flex-1 border-b border-slate-100"></div>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="w-5">0</span>
                        <div className="flex-1 border-b border-slate-100"></div>
                      </div>
                    </div>

                    {/* Curva SVG idéntica a la imagen */}
                    <svg className="absolute inset-0 w-full h-full overflow-visible pl-6" viewBox="0 0 420 160" preserveAspectRatio="none">
                      <defs>
                        <linearGradient id="gradientWave" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="0%" stopColor="#4E47FF" stopOpacity="0.22" />
                          <stop offset="100%" stopColor="#4E47FF" stopOpacity="0.0" />
                        </linearGradient>
                      </defs>

                      {/* Área sombreada */}
                      <path
                        d="M 30 145 C 50 140, 70 85, 100 80 C 130 75, 140 130, 170 130 C 200 130, 210 75, 240 75 C 270 75, 280 125, 310 125 C 340 125, 360 25, 390 25 L 390 145 Z"
                        fill="url(#gradientWave)"
                      />

                      {/* Línea azul morada continua */}
                      <path
                        d="M 30 145 C 50 140, 70 85, 100 80 C 130 75, 140 130, 170 130 C 200 130, 210 75, 240 75 C 270 75, 280 125, 310 125 C 340 125, 360 25, 390 25"
                        fill="none"
                        stroke="#4E47FF"
                        strokeWidth="3"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />

                      {/* Puntos interactivos con Tooltips */}
                      {chartPoints.map((point, index) => (
                        <g key={index} className="cursor-pointer">
                          <circle
                            cx={point.x}
                            cy={point.y}
                            r={hoveredPoint === index ? 6 : 4}
                            className="fill-white stroke-[#4E47FF] stroke-[3] transition-all"
                            onMouseEnter={() => setHoveredPoint(index)}
                            onMouseLeave={() => setHoveredPoint(null)}
                          />
                        </g>
                      ))}
                    </svg>

                    {/* Tooltip Dinámico */}
                    {hoveredPoint !== null && (
                      <div
                        className="absolute z-10 bg-slate-900 text-white text-[11px] font-semibold px-2.5 py-1 rounded-lg shadow-xl pointer-events-none transform -translate-x-1/2 -translate-y-8 transition-all"
                        style={{
                          left: `${(chartPoints[hoveredPoint].x / 420) * 100}%`,
                          top: `${(chartPoints[hoveredPoint].y / 160) * 100}%`,
                        }}
                      >
                        {chartPoints[hoveredPoint].val} visitas ({chartPoints[hoveredPoint].label})
                      </div>
                    )}
                  </div>
                </div>

                {/* Barra de Fechas del Calendario Inferior con día 21 activo */}
                <div className="flex items-center justify-center gap-3 mt-4 pt-3 border-t border-slate-100/60">
                  <button 
                    type="button"
                    aria-label="Anterior"
                    className="w-7 h-7 rounded-full border border-slate-200 flex items-center justify-center text-slate-400 hover:text-slate-600 transition-colors"
                  >
                    <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <polyline points="15 18 9 12 15 6" />
                    </svg>
                  </button>
                  <div className="flex items-center gap-3">
                    {calendarDays.map((day) => (
                      <button
                        key={day}
                        onClick={() => setSelectedDay(day)}
                        className={`w-7 h-7 rounded-full text-xs font-semibold flex items-center justify-center transition-all ${
                          selectedDay === day
                            ? "bg-[#4E47FF] text-white shadow-[0_4px_12px_rgba(78,71,255,0.4)] scale-110 font-bold"
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
                    className="w-7 h-7 rounded-full border border-slate-200 flex items-center justify-center text-slate-400 hover:text-slate-600 transition-colors"
                  >
                    <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <polyline points="9 18 15 12 9 6" />
                    </svg>
                  </button>
                </div>
              </div>

              {/* Columna Derecha (5 cols): Banner Morado + Módulo CONVERSIÓN MILIMÉTRICO */}
              <div className="lg:col-span-5 flex flex-col gap-6">
                
                {/* Banner Promocional Morado */}
                <div className="bg-gradient-to-r from-[#4F46E5] to-[#4338CA] p-6 rounded-3xl text-white shadow-[0_10px_25px_-5px_rgba(79,70,229,0.3)] relative overflow-hidden flex flex-col justify-between min-h-[175px]">
                  {/* Ilustración exacta de persona subiendo por flechas */}
                  <div className="absolute right-1 -bottom-2 pointer-events-none select-none">
                    <svg className="w-36 h-36" viewBox="0 0 160 160" fill="none">
                      <path d="M125 160 C 125 100, 145 70, 135 30" stroke="#6366F1" strokeWidth="6" strokeLinecap="round" />
                      <path d="M95 160 C 95 110, 105 80, 100 50" stroke="#6366F1" strokeWidth="5" strokeLinecap="round" />
                      <circle cx="135" cy="22" r="7" fill="#FBBF24" />
                      <polygon points="135,12 143,28 127,28" fill="#FFFFFF" />
                      <path d="M130 35 L 140 35 L 143 52 L 127 52 Z" fill="#FFFFFF" />
                      <polygon points="100,40 107,52 93,52" fill="#FFFFFF" />
                    </svg>
                  </div>

                  <div className="relative z-10 max-w-[215px]">
                    <h3 className="text-base font-bold tracking-tight mb-1.5 leading-snug">¿Necesitas más estadísticas?</h3>
                    <p className="text-[11px] text-indigo-100 font-normal leading-relaxed mb-4">
                      Actualiza a versión pro para beneficios adicionales.
                    </p>
                  </div>

                  <div className="relative z-10">
                    <button className="bg-[#10B981] hover:bg-[#059669] text-white text-xs font-bold px-4 py-2.5 rounded-xl flex items-center gap-2 shadow-md shadow-[#10B981]/30 hover:scale-[1.03] active:scale-[0.97] transition-all">
                      <div className="w-4 h-4 rounded-full border-2 border-white flex items-center justify-center">
                        <svg className="w-2.5 h-2.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                          <line x1="7" y1="17" x2="17" y2="7" />
                          <polyline points="7 7 17 7 17 17" />
                        </svg>
                      </div>
                      <span>Ir a Pro ahora</span>
                    </button>
                  </div>
                </div>

                {/* Módulo Conversión MILIMÉTRICO (con gráfico semi donut bicoloreado exacto al diseño) */}
                <div className="bg-white p-6 rounded-3xl border border-slate-100/80 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.03)] flex flex-col justify-between">
                  <div className="flex items-center justify-between mb-1">
                    <h3 className="text-[14px] font-bold text-[#1E293B]">Conversión</h3>
                  </div>

                  {/* Gráfico de Medio Anillo (Semi Donut Bicolor Exacto) */}
                  <div className="relative flex flex-col items-center justify-center pt-2 pb-1">
                    <svg className="w-56 h-28 overflow-visible" viewBox="0 0 200 100">
                      {/* Segmento 2: Fondo Azul Claro Desactivado (41.81%) */}
                      <path
                        d="M 148 42 A 80 80 0 0 1 180 100"
                        fill="none"
                        stroke="#F0F2FD"
                        strokeWidth="24"
                        strokeLinecap="round"
                      />
                      {/* Segmento 1: Arco Morado/Azul Activo (58.19%) */}
                      <path
                        d="M 20 100 A 80 80 0 0 1 148 42"
                        fill="none"
                        stroke="#4E47FF"
                        strokeWidth="24"
                        strokeLinecap="round"
                      />
                    </svg>

                    {/* Porcentaje Central y Crecimiento */}
                    <div className="text-center -mt-7 mb-2">
                      <span className="text-2xl font-black text-[#1E293B] block tracking-tight">58,19%</span>
                      <span className="inline-flex items-center text-[11px] font-bold text-[#10B981] mt-0.5">
                        ↑ 3.5%
                      </span>
                    </div>
                  </div>

                  {/* Resumen Inferior: Ingresos ($542,317) y Gastos ($497,456) */}
                  <div className="grid grid-cols-2 gap-4 pt-3 border-t border-slate-100 mt-2">
                    <div className="flex items-center gap-2">
                      <span className="text-[#10B981] text-xs font-bold">✓</span>
                      <div>
                        <span className="text-[10px] font-medium text-slate-400 block leading-tight">Ingresos</span>
                        <span className="text-xs font-bold text-[#1E293B] leading-tight">$542,317</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-slate-400 text-xs font-bold">↗</span>
                      <div>
                        <span className="text-[10px] font-medium text-slate-400 block leading-tight">Gastos</span>
                        <span className="text-xs font-bold text-[#1E293B] leading-tight">$497,456</span>
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

