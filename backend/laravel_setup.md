# Backend Implementation Guide (Laravel 11)

Since the live demo environment is Frontend-only, here is the complete code for the Laravel Backend API that matches the requirements.

## 1. Setup
```bash
composer create-project laravel/laravel nande-nihon-backend
cd nande-nihon-backend
php artisan install:api
```

## 2. Migrations

**create_articles_table.php**
```php
public function up()
{
    Schema::create('articles', function (Blueprint $table) {
        $table->id();
        $table->string('slug')->unique();
        $table->string('title');
        $table->text('excerpt');
        $table->longText('content');
        $table->string('image')->nullable();
        $table->enum('category', ['Belajar', 'Budaya', 'Tips']);
        $table->string('author');
        $table->timestamps();
    });
}
```

**create_contacts_table.php**
```php
public function up()
{
    Schema::create('contacts', function (Blueprint $table) {
        $table->id();
        $table->string('name');
        $table->string('email');
        $table->text('message');
        $table->timestamps();
    });
}
```

**create_newsletters_table.php**
```php
public function up()
{
    Schema::create('newsletters', function (Blueprint $table) {
        $table->id();
        $table->string('email')->unique();
        $table->timestamps();
    });
}
```

## 3. Routes (routes/api.php)

```php
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ArticleController;
use App\Http\Controllers\ContactController;
use App\Http\Controllers\NewsletterController;

Route::prefix('v1')->group(function () {
    // Public Routes
    Route::get('/articles', [ArticleController::class, 'index']);
    Route::get('/articles/{slug}', [ArticleController::class, 'show']);
    Route::post('/contact', [ContactController::class, 'store']);
    Route::post('/newsletter', [NewsletterController::class, 'store']);

    // Protected Routes (Need Auth Middleware)
    Route::middleware('auth:sanctum')->group(function () {
        Route::post('/articles', [ArticleController::class, 'store']);
        Route::put('/articles/{id}', [ArticleController::class, 'update']);
        Route::delete('/articles/{id}', [ArticleController::class, 'destroy']);
    });
});
```

## 4. Controllers

**ArticleController.php**
```php
namespace App\Http\Controllers;

use App\Models\Article;
use Illuminate\Http\Request;

class ArticleController extends Controller
{
    public function index(Request $request)
    {
        $query = Article::query();
        
        if ($request->has('category')) {
            $query->where('category', $request->category);
        }

        return response()->json($query->latest()->get());
    }

    public function show($slug)
    {
        $article = Article::where('slug', $slug)->firstOrFail();
        return response()->json($article);
    }

    public function store(Request $request)
    {
        $validated = $request->validate([
            'title' => 'required|string|max:255',
            'category' => 'required|in:Belajar,Budaya,Tips',
            'content' => 'required',
            'image' => 'url'
        ]);

        // Auto generate slug from title
        $validated['slug'] = Str::slug($validated['title']);
        
        $article = Article::create($validated);
        return response()->json($article, 201);
    }
}
```

**ContactController.php**
```php
namespace App\Http\Controllers;

use App\Models\Contact;
use Illuminate\Http\Request;

class ContactController extends Controller
{
    public function store(Request $request)
    {
        $validated = $request->validate([
            'name' => 'required|string',
            'email' => 'required|email',
            'message' => 'required|string'
        ]);

        Contact::create($validated);

        return response()->json(['message' => 'Pesan terkirim'], 200);
    }
}
```

## 5. Models

Create models (`php artisan make:model Article`, etc.) and ensure `protected $fillable = [...]` matches the migration columns.
