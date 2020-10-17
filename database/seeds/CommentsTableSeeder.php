<?php

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class CommentsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $param=[
            // 'id'=>1,
            'created_at'=>date("Y-m-d H:i:s"),
            'content'=>'commentsテーブルcontent',
            'article_id'=>1,
            'member_id'=>1,
        ];
        DB::table('comments')->insert($param);
        $param=[
            // 'id'=>2,
            'created_at'=>date("Y-m-d H:i:s"),
            'content'=>'commentsテーブルcontent',
            'article_id'=>2,
            'member_id'=>1,
        ];
        DB::table('comments')->insert($param);
        $param=[
            // 'id'=>3,
            'created_at'=>date("Y-m-d H:i:s"),
            'content'=>'commentsテーブルcontent',
            'article_id'=>3,
            'member_id'=>1,
        ];
        DB::table('comments')->insert($param);
    }
}
