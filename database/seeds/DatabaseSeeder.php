<?php

use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        $this->call(ArticlesTableSeeder::class);
        $this->call(CommentsTableSeeder::class);
        $this->call(MembersTableSeeder::class);
        $this->call(MessagesTableSeeder::class);
        $this->call(NotificationsTableSeeder::class);
        $this->call(PhotosTableSeeder::class);
        $this->call(TokensTableSeeder::class);
        

    }
}
