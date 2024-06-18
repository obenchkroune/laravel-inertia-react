<?php

namespace App\Data;

use Closure;
use Spatie\LaravelData\Data;
use Spatie\TypeScriptTransformer\Attributes\TypeScriptType;

class SharedData extends Data
{
    public function __construct(
        #[TypeScriptType(UserData::class)]
        public Closure|null $user = null,
    ) {}
}
