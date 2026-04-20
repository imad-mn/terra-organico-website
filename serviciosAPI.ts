interface ModeloBase {
    fechaEntrega: string;
    codigoCliente: number
}
export interface Configuracion extends ModeloBase {
    proximaFechaEntrega: string;
    detenerPedidos: boolean;
    tipoProductos: string[];
    ordenEntrega: number[];
}
export interface ConElementos<T> extends ModeloBase {
    elementos: T[];
}
export interface Producto {
    id: number;
    tipo: string;
    nombre: string;
    presentacion: string;
    descripcion: string;
    precio: number;
    habilitado: boolean;
    proveedor: string;
    imagen: string;
    decimales: boolean;
    pesoReal: boolean;
}
export interface Testimonio {
    Persona: string;
    Testimonio: string;
}

async function get<T>(endpoint: string): Promise<T> {
    const config = useRuntimeConfig();
    const nuxtApp = useNuxtApp()

    const response = await useFetch(endpoint, {
        baseURL: config.public.apiBase,
        key: endpoint,
        getCachedData(key) {
            return nuxtApp.payload.data[key] || nuxtApp.static.data[key]
        }
    });
    return response.data.value as T;
}

export async function obtenerCategorias(): Promise<string[]> {
    const configuracion = await get<Configuracion>('/configuracion');
    return configuracion.tipoProductos;
}

export async function obtenerProductos(): Promise<Producto[]> {
    const conElementos = await get<ConElementos<Producto>>('/productos');
    return conElementos.elementos;
}

export async function obtenerTestimonios(): Promise<Testimonio[]> {
    const conElementos = await get<ConElementos<Testimonio>>('/testimonios');
    return conElementos.elementos;
}
