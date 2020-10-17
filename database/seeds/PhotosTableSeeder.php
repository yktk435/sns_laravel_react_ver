<?php

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class PhotosTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $param=[
            'id'=>10,
            'created_at'=>date("Y-m-d H:i:s"),
            'article_id'=>123,
            'url'=>'https://tk.ismcdn.jp/mwimgs/e/b/1140/img_eb31afc9c1fb914d68a7c73b657c7ebe183087.jpg',
        ];
        DB::table('photos')->insert($param);
    }
}
