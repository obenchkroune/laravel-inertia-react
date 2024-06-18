import { Page } from '@inertiajs/core';

declare module '@inertiajs/react' {
    function usePage(): Page<App.Data.SharedData>;
}
