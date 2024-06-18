import { Page } from '@inertiajs/core';

type SharedData = {
    user: models.User | null;
};

declare module '@inertiajs/react' {
    function usePage(): Page<SharedData>;
}
