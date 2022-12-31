<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateHomeCommonsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('home_commons', function (Blueprint $table) {
            $table->id();
            $table->string('title')->nullable(true);
            $table->string('sub_title')->nullable(true);
            $table->text('technology_description')->nullable(true);
            $table->string('total_project')->nullable(true);
            $table->string('total_client')->nullable(true);
            $table->string('video_title')->nullable(true);
            $table->text('video_description')->nullable(true);
            $table->text('video_url')->nullable(true);
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
        Schema::dropIfExists('home_commons');
    }
}
