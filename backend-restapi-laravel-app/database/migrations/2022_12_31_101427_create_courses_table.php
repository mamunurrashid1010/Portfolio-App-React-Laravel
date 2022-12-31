<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateCoursesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('courses', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->text('short_description')->nullable(true);
            $table->text('image')->nullable(true);
            $table->string('long_title')->nullable(true);
            $table->longText('long_description')->nullable(true);
            $table->string('total_lecture')->nullable(true);
            $table->string('total_student')->nullable(true);
            $table->longText('skills')->nullable(true);
            $table->text('video_url')->nullable(true);
            $table->text('courses_link')->nullable(true);
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
        Schema::dropIfExists('courses');
    }
}
