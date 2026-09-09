"use client";

import React, { useState } from "react";

// Iconos vectoriales SVG limpios y nítidos tipo Lucide
function HomeIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
      <polyline points="9 22 9 12 15 12 15 22"/>
    </svg>
  );
}

function ShoppingBagIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z"/>
      <path d="M3 6h18"/>
      <path d="M16 10a4 4 0 0 1-8 0"/>
    </svg>
  );
}

function TagIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12.586 2.586A2 2 0 0 0 11.172 2H4a2 2 0 0 0-2 2v7.172a2 2 0 0 0 .586 1.414l8.704 8.704a2.426 2.426 0 0 0 3.42 0l6.58-6.58a2.426 2.426 0 0 0 0-3.42z"/>
      <circle cx="7.5" cy="7.5" r=".5" fill="currentColor"/>
    </svg>
  );
}

function BarChartIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="18" x2="18" y1="20" y2="10"/>
      <line x1="12" x2="12" y1="20" y2="4"/>
      <line x1="6" x2="6" y1="20" y2="14"/>
    </svg>
  );
}

function MegaphoneIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="m3 11 18-5v12L3 14v-3z"/>
      <path d="M11.6 16.8a3 3 0 1 1-5.8-1.6"/>
    </svg>
  );
}

function MessageSquareIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
    </svg>
  );
}

function LogOutIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/>
      <polyline points="16 17 21 12 16 7"/>
      <line x1="21" x2="9" y1="12" y2="12"/>
    </svg>
  );
}

function SearchIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="11" cy="11" r="8"/>
      <path d="m21 21-4.3-4.3"/>
    </svg>
  );
}

function BellIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9"/>
      <path d="M10.3 21a1.94 1.94 0 0 0 3.4 0"/>
    </svg>
  );
}

function DownloadIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
      <polyline points="7 10 12 15 17 10"/>
      <line x1="12" x2="12" y1="15" y2="3"/>
    </svg>
  );
}

function UsersIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/>
      <circle cx="9" cy="7" r="4"/>
      <path d="M22 21v-2a4 4 0 0 0-3-3.87"/>
      <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
    </svg>
  );
}

function ArrowUpRightIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <line x1="7" y1="17" x2="17" y2="7"/>
      <polyline points="7 7 17 7 17 17"/>
    </svg>
  );
}

function ArrowDownRightIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <line x1="7" y1="7" x2="17" y2="17"/>
      <polyline points="17 7 17 17 7 17"/>
    </svg>
  );
}

function ChevronDownIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="6 9 12 15 18 9"/>
    </svg>
  );
}

function ChevronLeftIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="15 18 9 12 15 6"/>
    </svg>
  );
}

function ChevronRightIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="9 18 15 12 9 6"/>
    </svg>
  );
}

export default function DashboardPage() {
  const [activeMenu, setActiveMenu] = useState("Dashboard");
  const [selectedDay, setSelectedDay] = useState(21);
  const [hoveredPoint, setHoveredPoint] = useState<number | null>(null);

  // Menú con iconos y estados
  const menuItems = [
    { name: "Dashboard", icon: HomeIcon, hasSubmenu: false },
    { name: "Pedidos", icon: ShoppingBagIcon, hasSubmenu: true },
    { name: "Productos", icon: TagIcon, hasSubmenu: true },
    { name: "Análisis", icon: BarChartIcon, hasSubmenu: false },
    { name: "Marketing", icon: MegaphoneIcon, hasSubmenu: true },
    { name: "Mensajes", icon: MessageSquareIcon, badge: "25", hasSubmenu: false },
  ];

  // Integraciones
  const integrations = [
    {
      name: "Jira",
      svg: (
        <svg className="w-4 h-4 text-blue-500" viewBox="0 0 24 24" fill="currentColor">
          <path d="M11.53 2c0 2.4-1.97 4.35-4.38 4.35H4.8v2.35h2.35c3.7 0 6.7-3 6.7-6.7V2h-2.32zm0 7.05c0 2.4-1.97 4.35-4.38 4.35H4.8v2.35h2.35c3.7 0 6.7-3 6.7-6.7V9.05h-2.32zm0 7.05c0 2.4-1.97 4.35-4.38 4.35H4.8v2.35h2.35c3.7 0 6.7-3 6.7-6.7v-2.35h-2.32z"/>
        </svg>
      ),
    },
    {
      name: "Slack",
      svg: (
        <div className="grid grid-cols-2 gap-0.5 w-4 h-4">
          <span className="w-1.5 h-1.5 rounded-sm bg-red-400"></span>
          <span className="w-1.5 h-1.5 rounded-sm bg-blue-400"></span>
          <span className="w-1.5 h-1.5 rounded-sm bg-amber-400"></span>
          <span className="w-1.5 h-1.5 rounded-sm bg-emerald-400"></span>
        </div>
      ),
    },
    {
      name: "Intercom",
      svg: (
        <div className="w-4 h-4 rounded-sm bg-sky-500 flex items-center justify-center text-white text-[10px] font-black">
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
    <div className="min-h-screen bg-[#F5F6FA] text-slate-700 font-sans p-2 sm:p-5 md:p-8 flex items-center justify-center antialiased selection:bg-[#4E47FF]/20">
      {/* Tarjeta Contenedor Principal (Dashboard Canvas) */}
      <div className="w-full max-w-[1360px] bg-white rounded-[32px] shadow-2xl shadow-slate-200/70 border border-slate-100 flex flex-col lg:flex-row overflow-hidden">
        
        {/* ================= BARRA LATERAL (SIDEBAR) ================= */}
        <aside className="w-full lg:w-[240px] bg-white p-6 border-b lg:border-b-0 lg:border-r border-slate-100 flex flex-col justify-between shrink-0">
          <div>
            {/* Logo y Botón de Colapso */}
            <div className="flex items-center justify-between mb-8">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-xl bg-amber-400 flex items-center justify-center font-black text-white text-base shadow-sm shadow-amber-300">
                  R
                </div>
                <span className="text-xl font-bold tracking-tight text-slate-800">flex</span>
              </div>
              <button 
                type="button"
                aria-label="Contraer menú"
                className="w-7 h-7 rounded-full border border-slate-200 flex items-center justify-center text-slate-400 hover:text-slate-600 hover:border-slate-300 transition-colors"
              >
                <ChevronLeftIcon className="w-3.5 h-3.5" />
              </button>
            </div>

            {/* Menú Principal */}
            <div className="mb-7">
              <span className="text-[11px] font-bold tracking-wider text-slate-400 uppercase block mb-3 px-3">
                Menú
              </span>
              <nav className="space-y-1.5">
                {menuItems.map((item) => {
                  const isActive = activeMenu === item.name;
                  const Icon = item.icon;
                  return (
                    <button
                      key={item.name}
                      onClick={() => setActiveMenu(item.name)}
                      className={`w-full flex items-center justify-between px-3.5 py-2.5 rounded-2xl text-xs font-semibold transition-all duration-200 group ${
                        isActive
                          ? "bg-[#4E47FF] text-white shadow-lg shadow-[#4E47FF]/35 scale-[1.02]"
                          : "text-slate-500 hover:text-slate-800 hover:bg-slate-50"
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <Icon
                          className={`w-4 h-4 transition-transform group-hover:scale-110 ${
                            isActive ? "text-white" : "text-slate-400 group-hover:text-slate-600"
                          }`}
                        />
                        <span className="text-[13px]">{item.name}</span>
                      </div>

                      <div className="flex items-center gap-1.5">
                        {item.badge && (
                          <span className="bg-[#10B981] text-white text-[10px] font-bold px-2 py-0.5 rounded-full shadow-sm">
                            {item.badge}
                          </span>
                        )}
                        {item.hasSubmenu && (
                          <ChevronDownIcon
                            className={`w-3.5 h-3.5 transition-transform ${
                              isActive ? "text-white" : "text-slate-300 group-hover:text-slate-500"
                            }`}
                          />
                        )}
                      </div>
                    </button>
                  );
                })}
              </nav>
            </div>

            {/* Integraciones */}
            <div>
              <span className="text-[11px] font-bold tracking-wider text-slate-400 uppercase block mb-3 px-3">
                Integraciones
              </span>
              <div className="space-y-1">
                {integrations.map((item) => (
                  <button
                    key={item.name}
                    className="w-full flex items-center gap-3 px-3.5 py-2 rounded-xl text-xs font-semibold text-slate-500 hover:text-slate-800 hover:bg-slate-50 transition-all duration-150"
                  >
                    {item.svg}
                    <span className="text-[13px]">{item.name}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Botón de Cerrar Sesión */}
          <div className="pt-6 border-t border-slate-100">
            <button className="flex items-center gap-2.5 px-3 py-2 text-slate-500 hover:text-rose-600 text-xs font-semibold rounded-xl hover:bg-rose-50/50 transition-all group w-full">
              <LogOutIcon className="w-4 h-4 text-slate-400 group-hover:text-rose-600 transition-colors" />
              <span>Cerrar sesión</span>
            </button>
          </div>
        </aside>

        {/* ================= CONTENEDOR CENTRAL ================= */}
        <div className="flex-1 flex flex-col bg-[#FAFBFF] overflow-y-auto">
          
          {/* Header Superior */}
          <header className="h-20 px-6 md:px-8 flex items-center justify-between border-b border-slate-100 bg-white/80 backdrop-blur-sm sticky top-0 z-20">
            {/* Buscador */}
            <div className="relative w-64 md:w-80">
              <SearchIcon className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
              <input
                type="text"
                placeholder="Buscar..."
                className="w-full bg-[#F5F6FA] text-slate-700 text-xs rounded-full pl-9 pr-4 py-2.5 outline-none border border-transparent focus:border-[#4E47FF]/50 focus:bg-white transition-all shadow-inner"
              />
            </div>

            {/* Acciones Header (Notificación, Saldo, Perfil) */}
            <div className="flex items-center gap-5">
              {/* Notificaciones */}
              <button 
                type="button"
                aria-label="Notificaciones"
                className="relative p-2 rounded-full hover:bg-slate-100 text-slate-400 hover:text-slate-600 transition-colors"
              >
                <BellIcon className="w-4 h-4" />
                <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-[#4E47FF] rounded-full ring-2 ring-white"></span>
              </button>

              {/* Saldo de Cuenta */}
              <div className="text-right hidden sm:block">
                <span className="text-[11px] text-slate-400 font-medium block leading-tight">Tu Saldo</span>
                <span className="text-sm font-extrabold text-[#4E47FF] leading-tight">$5.456</span>
              </div>

              {/* Avatar del usuario con saludo en español */}
              <div className="flex items-center gap-2.5 pl-2 border-l border-slate-200">
                <div className="w-9 h-9 rounded-full bg-gradient-to-tr from-amber-500 to-orange-400 p-[2px] shadow-sm flex items-center justify-center">
                  <div className="w-full h-full rounded-full bg-slate-900 flex items-center justify-center text-xs font-bold text-white overflow-hidden select-none">
                    🧔🏽
                  </div>
                </div>
                <div className="hidden sm:flex flex-col">
                  <span className="text-xs font-bold text-slate-700">Hola, Lay</span>
                </div>
              </div>
            </div>
          </header>

          {/* Área Principal de Contenido del Dashboard */}
          <main className="p-6 md:p-8 space-y-6">
            
            {/* Fila Superior de Dashboard: Título + Botones */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-2xl bg-[#4E47FF] flex items-center justify-center text-white shadow-md shadow-[#4E47FF]/25">
                  <HomeIcon className="w-5 h-5" />
                </div>
                <h1 className="text-xl font-black text-slate-800 tracking-tight">Dashboard</h1>
              </div>

              <div className="flex items-center gap-3">
                {/* Selector de Período Simulado */}
                <div className="relative">
                  <button className="flex items-center gap-2 bg-white border border-slate-200/90 hover:border-slate-300 px-3.5 py-2 rounded-xl text-xs font-semibold text-slate-600 shadow-sm transition-all hover:bg-slate-50">
                    <svg className="w-3.5 h-3.5 text-slate-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
                      <line x1="16" y1="2" x2="16" y2="6"/>
                      <line x1="8" y1="2" x2="8" y2="6"/>
                      <line x1="3" y1="10" x2="21" y2="10"/>
                    </svg>
                    <span>Este Mes</span>
                    <ChevronDownIcon className="w-3.5 h-3.5 text-slate-400" />
                  </button>
                </div>

                {/* Botón Descargar Reporte */}
                <button className="flex items-center gap-2 bg-[#10B981] hover:bg-[#059669] text-white text-xs font-bold px-4 py-2 rounded-xl shadow-md shadow-[#10B981]/25 hover:shadow-lg hover:shadow-[#10B981]/30 hover:scale-[1.02] active:scale-[0.98] transition-all">
                  <DownloadIcon className="w-3.5 h-3.5" />
                  <span>Descargar Reporte</span>
                </button>
              </div>
            </div>

            {/* Tarjetas de Métricas Estadísticas (3 Cards) */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              
              {/* Card 1: Ventas Totales */}
              <div className="bg-white p-5 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow flex items-center justify-between group">
                <div className="flex items-center gap-3.5">
                  <div className="w-11 h-11 rounded-2xl bg-indigo-50/80 flex items-center justify-center text-[#4E47FF] group-hover:scale-105 transition-transform">
                    <ShoppingBagIcon className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[11px] font-semibold text-slate-400 block">Ventas Totales</span>
                    <div className="flex items-baseline gap-2">
                      <span className="text-2xl font-black text-slate-800 tracking-tight">263k</span>
                      <span className="inline-flex items-center text-[11px] font-bold text-[#10B981]">
                        <ArrowUpRightIcon className="w-3 h-3 stroke-[3]" /> 15.6%
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Card 2: Visitantes Totales */}
              <div className="bg-white p-5 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow flex items-center justify-between group">
                <div className="flex items-center gap-3.5">
                  <div className="w-11 h-11 rounded-2xl bg-indigo-50/80 flex items-center justify-center text-[#4E47FF] group-hover:scale-105 transition-transform">
                    <UsersIcon className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[11px] font-semibold text-slate-400 block">Visitantes Totales</span>
                    <div className="flex items-baseline gap-2">
                      <span className="text-2xl font-black text-slate-800 tracking-tight">35k</span>
                      <span className="inline-flex items-center text-[11px] font-bold text-rose-500">
                        <ArrowDownRightIcon className="w-3 h-3 stroke-[3]" /> 6.2%
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Card 3: Pedidos Totales */}
              <div className="bg-white p-5 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow flex items-center justify-between group">
                <div className="flex items-center gap-3.5">
                  <div className="w-11 h-11 rounded-2xl bg-indigo-50/80 flex items-center justify-center text-[#4E47FF] group-hover:scale-105 transition-transform">
                    <ShoppingBagIcon className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[11px] font-semibold text-slate-400 block">Pedidos Totales</span>
                    <div className="flex items-baseline gap-2">
                      <span className="text-2xl font-black text-slate-800 tracking-tight">165k</span>
                      <span className="inline-flex items-center text-[11px] font-bold text-[#10B981]">
                        <ArrowUpRightIcon className="w-3 h-3 stroke-[3]" /> 3.5%
                      </span>
                    </div>
                  </div>
                </div>
              </div>

            </div>

            {/* Sección Central de Gráficos y Tarjetas */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-5">
              
              {/* Columna Izquierda: Sesiones de la Tienda Online */}
              <div className="lg:col-span-7 bg-white p-6 rounded-3xl border border-slate-100 shadow-sm flex flex-col justify-between">
                <div>
                  {/* Encabezado del bloque con Botón Ver Reporte */}
                  <div className="flex items-center justify-between mb-4">
                    <h2 className="text-sm font-bold text-slate-800">Sesiones de la Tienda Online</h2>
                    <button className="text-[11px] font-semibold text-slate-500 border border-slate-200/80 rounded-xl px-3 py-1.5 hover:bg-slate-50 hover:text-slate-800 transition-colors">
                      Ver Reporte
                    </button>
                  </div>

                  {/* Resumen de Visitantes y Comparativa */}
                  <div className="flex items-center justify-between py-2 border-b border-slate-50 mb-4">
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-xl bg-indigo-50 flex items-center justify-center text-[#4E47FF]">
                        <UsersIcon className="w-4 h-4" />
                      </div>
                      <div>
                        <span className="text-[10px] uppercase font-bold tracking-wider text-slate-400 block">Visitantes</span>
                        <span className="text-xl font-black text-slate-800">68</span>
                      </div>
                    </div>

                    <div className="flex items-center gap-4 text-xs font-bold">
                      <span className="inline-flex items-center text-[#10B981]">
                        <ArrowUpRightIcon className="w-3 h-3 mr-0.5" /> 15.6%
                      </span>
                      <div className="flex items-center gap-1">
                        <span className="text-indigo-600 font-bold">26</span>
                        <span className="inline-flex items-center text-rose-500 text-[11px]">
                          <ArrowDownRightIcon className="w-3 h-3 mr-0.5" /> 1.6%
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Selector de Mes para Sesiones a lo Largo del Tiempo */}
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-bold text-slate-700">Sesiones en el Tiempo</span>
                    <button className="flex items-center gap-1.5 text-[11px] font-semibold text-slate-500 bg-slate-50 border border-slate-200/70 rounded-lg px-2.5 py-1 hover:bg-slate-100 transition-colors">
                      <svg className="w-3 h-3 text-slate-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
                        <line x1="16" y1="2" x2="16" y2="6"/>
                        <line x1="8" y1="2" x2="8" y2="6"/>
                      </svg>
                      <span>Febrero</span>
                      <ChevronDownIcon className="w-3 h-3 text-slate-400" />
                    </button>
                  </div>

                  {/* Gráfico Curvo Interactivo con SVG y Tooltips Dinámicos */}
                  <div className="relative h-44 w-full pt-2">
                    {/* Líneas de Guía de Eje Y */}
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

                    {/* Curva SVG con sombreado y puntos de interacción */}
                    <svg className="absolute inset-0 w-full h-full overflow-visible pl-6" viewBox="0 0 420 160" preserveAspectRatio="none">
                      <defs>
                        <linearGradient id="gradientWave" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="0%" stopColor="#4E47FF" stopOpacity="0.22" />
                          <stop offset="100%" stopColor="#4E47FF" stopOpacity="0.0" />
                        </linearGradient>
                        <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
                          <feDropShadow dx="0" dy="4" stdDeviation="4" floodColor="#4E47FF" floodOpacity="0.35" />
                        </filter>
                      </defs>

                      {/* Área de fondo bajo la curva */}
                      <path
                        d="M 30 145 C 50 140, 70 85, 100 80 C 130 75, 140 130, 170 130 C 200 130, 210 75, 240 75 C 270 75, 280 125, 310 125 C 340 125, 360 25, 390 25 L 390 145 Z"
                        fill="url(#gradientWave)"
                      />

                      {/* Línea Principal de la Curva */}
                      <path
                        d="M 30 145 C 50 140, 70 85, 100 80 C 130 75, 140 130, 170 130 C 200 130, 210 75, 240 75 C 270 75, 280 125, 310 125 C 340 125, 360 25, 390 25"
                        fill="none"
                        stroke="#4E47FF"
                        strokeWidth="3.2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        filter="url(#glow)"
                      />

                      {/* Puntos interactivos con Tooltips al pasar el mouse */}
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

                    {/* Tooltip interactivo flotante */}
                    {hoveredPoint !== null && (
                      <div
                        className="absolute z-10 bg-slate-800 text-white text-[11px] font-semibold px-2.5 py-1 rounded-lg shadow-lg pointer-events-none transform -translate-x-1/2 -translate-y-8 transition-all"
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

                {/* Barra de Fechas del Calendario Inferior */}
                <div className="flex items-center justify-center gap-2 mt-4 pt-3 border-t border-slate-50">
                  <button 
                    type="button"
                    aria-label="Día anterior"
                    className="w-7 h-7 rounded-full border border-slate-200 flex items-center justify-center text-slate-400 hover:text-slate-600 transition-colors"
                  >
                    <ChevronLeftIcon className="w-3.5 h-3.5" />
                  </button>
                  <div className="flex items-center gap-3">
                    {calendarDays.map((day) => (
                      <button
                        key={day}
                        onClick={() => setSelectedDay(day)}
                        className={`w-7 h-7 rounded-full text-xs font-semibold flex items-center justify-center transition-all ${
                          selectedDay === day
                            ? "bg-[#4E47FF] text-white shadow-md shadow-[#4E47FF]/35 scale-110"
                            : "text-slate-400 hover:text-slate-600 hover:bg-slate-100"
                        }`}
                      >
                        {day}
                      </button>
                    ))}
                  </div>
                  <button 
                    type="button"
                    aria-label="Día siguiente"
                    className="w-7 h-7 rounded-full border border-slate-200 flex items-center justify-center text-slate-400 hover:text-slate-600 transition-colors"
                  >
                    <ChevronRightIcon className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>

              {/* Columna Derecha: Banner Promo + Módulo Conversión */}
              <div className="lg:col-span-5 flex flex-col gap-5">
                
                {/* Banner Promocional Morado */}
                <div className="bg-gradient-to-r from-[#5B4EFF] to-[#4335E8] p-6 rounded-3xl text-white shadow-lg shadow-[#4E47FF]/20 relative overflow-hidden flex flex-col justify-between min-h-[170px]">
                  {/* Ilustración Vectorial Réplica de Fondo */}
                  <div className="absolute right-3 -bottom-2 opacity-90 pointer-events-none select-none">
                    <svg className="w-36 h-36" viewBox="0 0 160 160" fill="none">
                      <path d="M120 160 C 120 100, 140 70, 130 30" stroke="#7C6EFF" strokeWidth="6" strokeLinecap="round" />
                      <path d="M90 160 C 90 110, 100 80, 95 50" stroke="#7C6EFF" strokeWidth="5" strokeLinecap="round" />
                      <circle cx="130" cy="22" r="8" fill="#FBBF24" />
                      <path d="M125 35 L 135 35 L 138 52 L 122 52 Z" fill="#FFFFFF" />
                      <polygon points="95,40 102,52 88,52" fill="#FFFFFF" />
                      <polygon points="130,12 138,28 122,28" fill="#FFFFFF" />
                      <circle cx="60" cy="120" r="4" fill="#FFFFFF" opacity="0.4"/>
                      <circle cx="140" cy="100" r="3" fill="#FFFFFF" opacity="0.4"/>
                    </svg>
                  </div>

                  <div className="relative z-10 max-w-[210px]">
                    <h3 className="text-base font-bold tracking-tight mb-1">¿Necesitas más estadísticas?</h3>
                    <p className="text-[11px] text-indigo-100 font-medium leading-relaxed mb-4">
                      Actualiza a versión pro para beneficios adicionales.
                    </p>
                  </div>

                  <div className="relative z-10">
                    <button className="bg-[#10B981] hover:bg-[#059669] text-white text-xs font-bold px-4 py-2 rounded-xl flex items-center gap-2 shadow-md shadow-[#10B981]/30 hover:scale-[1.03] active:scale-[0.97] transition-all">
                      <div className="w-4 h-4 rounded-full border-2 border-white flex items-center justify-center">
                        <ArrowUpRightIcon className="w-2.5 h-2.5" />
                      </div>
                      <span>Ir a Pro ahora</span>
                    </button>
                  </div>
                </div>

                {/* Módulo Conversión con Donut / Medio Anillo */}
                <div className="bg-white p-6 rounded-3xl border border-slate-100 shadow-sm flex flex-col justify-between">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-sm font-bold text-slate-800">Conversión</h3>
                  </div>

                  {/* Gráfico de Medio Anillo (Semi Donut) */}
                  <div className="relative flex flex-col items-center justify-center my-3">
                    <svg className="w-56 h-28 overflow-visible" viewBox="0 0 200 100">
                      {/* Fondo del arco */}
                      <path
                        d="M 20 100 A 80 80 0 0 1 180 100"
                        fill="none"
                        stroke="#EEF2FF"
                        strokeWidth="24"
                        strokeLinecap="round"
                      />
                      {/* Arco de progreso morado 58,19% */}
                      <path
                        d="M 20 100 A 80 80 0 0 1 145 35"
                        fill="none"
                        stroke="#4E47FF"
                        strokeWidth="24"
                        strokeLinecap="round"
                        className="transition-all duration-700"
                      />
                    </svg>

                    {/* Valor Central de Conversión */}
                    <div className="text-center -mt-6">
                      <span className="text-2xl font-black text-slate-800 block tracking-tight">58,19%</span>
                      <span className="inline-flex items-center text-[11px] font-bold text-[#10B981]">
                        <ArrowUpRightIcon className="w-3 h-3 mr-0.5" /> 3.5%
                      </span>
                    </div>
                  </div>

                  {/* Detalle Inferior: Ingresos y Gastos */}
                  <div className="grid grid-cols-2 gap-4 pt-3 border-t border-slate-50 mt-1">
                    <div className="flex items-center gap-2">
                      <span className="text-[#10B981] text-xs font-black">✓</span>
                      <div>
                        <span className="text-[10px] font-medium text-slate-400 block">Ingresos</span>
                        <span className="text-xs font-bold text-slate-800">$542,317</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-slate-400 text-xs font-black">↗</span>
                      <div>
                        <span className="text-[10px] font-medium text-slate-400 block">Gastos</span>
                        <span className="text-xs font-bold text-slate-800">$497,456</span>
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
