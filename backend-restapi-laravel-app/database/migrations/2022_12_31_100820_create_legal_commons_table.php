<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateLegalCommonsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('legal_commons', function (Blueprint $table) {
            $table->id();
            $table->longText('about')->nullable(true);
            $table->longText('refund')->nullable(true);
            $table->longText('terms')->nullable(true);
            $table->longText('privacy')->nullable(true);
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('legal_commons');
    }
}
