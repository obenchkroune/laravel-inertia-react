import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import run from 'vite-plugin-run';

export default defineConfig({
    plugins: [
        laravel({
            input: ['resources/css/app.css', 'resources/ts/app.tsx'],
            refresh: true,
        }),
        run([
            {
                name: 'typescript transform',
                run: ['php', 'artisan', 'typescript:transform'],
                pattern: ['app/**/*.php', 'app/**/Enums/**/*.php'],
            },
            {
                name: 'routes',
                run: ['php', 'artisan', 'trail:generate'],
                pattern: ['routes/*.php'],
            },
        ]),
    ],
});
