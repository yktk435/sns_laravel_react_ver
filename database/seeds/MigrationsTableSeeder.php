<?php

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class MigrationsTableSeeder extends Seeder
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
            'content'=>'テストcontent',
            'article_id'=>123,
            'comment_id'=>1234,
        ];
        DB::table('comments')->insert($param);
    }
}

// Array
// (
//     [0] => Array
//         (
//             [id] => 10
//             [created_at] => 1923-03-15T14:53:21.000000Z
//             [content] => テストcontent
//             [article_id] => 123
//         )

//     [1] => Array
//         (
//             [id] => 11
//             [created_at] => 2020-09-08T00:00:00.000000Z
//             [content] => 2つめ
//             [article_id] => 987
//         )

//     [2] => Array
//         (
//             [id] => 141
//             [created_at] => 1850-09-08T00:00:00.000000Z
//             [content] => 3つめ
//             [article_id] => 9287
//         )

// )