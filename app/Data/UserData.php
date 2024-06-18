<?php

namespace App\Data;

use DateTime;
use Spatie\LaravelData\Data;

class UserData extends Data
{
    public function __construct(
        public string $name,
        public string $email,
        public ?DateTime $createdAt = null,
        public ?DateTime $updatedAt = null
    ) {}
}
