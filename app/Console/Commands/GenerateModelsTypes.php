<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;
use Symfony\Component\Process\Process;

class GenerateModelsTypes extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'app:generate-models-types';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Generate typescript definitions for database models';

    /**
     * Execute the console command.
     */
    public function handle()
    {
        $process = new Process([
            'php', 'artisan', 'model:typer',
            '--no-hidden', '--optional-nullables', '--global'
        ]);
        $process->run();

        $output = $process->getOutput();
        file_put_contents(app()->resourcePath('types/models.d.ts'), $output);
    }
}
