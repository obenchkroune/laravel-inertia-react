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
                name: 'data',
                run: ['php', 'artisan', 'typescript:transform'],
                pattern: ['app/**/*.php', 'app/**/Enums/**/*.php'],
            },
            {
                name: 'models',
                run: [
                    'php',
                    'artisan',
                    'model:typer',
                    '--optional-nullables',
                    '--no-hidden',
                    '>',
                    'resources/types/models.d.ts',
                ],
                pattern: [
                    'database/migrations/**/*.php',
                    'app/Models/**/*.php',
                ],
            },
            {
                name: 'routes',
                run: ['php', 'artisan', 'trail:generate'],
                pattern: ['routes/*.php'],
            },
        ]),
    ],
});
