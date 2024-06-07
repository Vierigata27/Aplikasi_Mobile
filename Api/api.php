<?php 
// error_reporting(0);

// $host = "localhost";
// $user = "erpy7825_vieri";
// $pass = "Vieri2003";
// $db = "erpy7825_bezz";

$host = "localhost";
$user = "root";
$pass = "";
$db = "bezz";

$koneksi = mysqli_connect($host, $user, $pass, $db);
if (!$koneksi) {
    die("Connection failed: " . mysqli_connect_error());
}

$op = $_GET['op'] ?? '';
switch($op){
    case '': normal(); break;
    default: normal(); break;
    case 'create': create(); break;
    case 'detail': detail(); break;
    case 'update': update(); break;
    case 'delete': delete(); break;
    case 'tabel_kategori': tabel_kategori(); break;
    case 'tabel_trending': tabel_trending(); break;
    case 'create_trending': create_trending(); break;
    case 'detail_trending': detail_trending(); break;
    case 'update_trending': update_trending(); break;
    case 'delete_trending': delete_trending(); break;
    case 'registrasi': registrasi(); break;
    case 'login': login(); break;
    
}

function normal(){
    global $koneksi;
    $sql1 = "SELECT berita.*, kategori.kategori FROM berita LEFT JOIN kategori ON berita.kategori_id = kategori.id ORDER BY berita.id DESC";
    $q1 = mysqli_query($koneksi, $sql1);

    $hasil = [];
    while($r1 = mysqli_fetch_array($q1)){
        $hasil[] = array(
            'id' => $r1['id'],
            'judul' => $r1['judul'],
            'kategori' => $r1['kategori'],
            'deskripsi' => $r1['deskripsi'],
            'tanggal_input' => $r1['tanggal_input'],
            'gambar' => $r1['gambar']
        );
    }
    $data['data']['result'] = $hasil;
    echo json_encode($data);
}

function create(){
    global $koneksi;
    $judul = $_POST['judul'] ?? '';
    $kategori_id = $_POST['kategori_id'] ?? 0;
    $deskripsi = $_POST['deskripsi'] ?? '';
    $gambar = $_POST['gambar'] ?? '';

    $hasil = "Gagal dimasukkan data";
    if ($judul && $kategori_id && $deskripsi) {
        $stmt = $koneksi->prepare("INSERT INTO berita (judul, kategori_id, deskripsi, gambar, tanggal_input) VALUES (?, ?, ?, ?, NOW())");
        $stmt->bind_param("siss", $judul, $kategori_id, $deskripsi, $gambar);

        if ($stmt->execute()) {
            $hasil = "Berhasil menambahkan data";
        }
        $stmt->close();
    }

    $data['data']['result'] = $hasil;
    echo json_encode($data);
}

function detail(){
    global $koneksi;
    $id = $_GET['id'] ?? 0;

    $sql1 = "SELECT berita.*, kategori.kategori FROM berita LEFT JOIN kategori ON berita.kategori_id = kategori.id WHERE berita.id = ?";
    $stmt = $koneksi->prepare($sql1);
    $stmt->bind_param("i", $id);
    $stmt->execute();
    $result = $stmt->get_result();

    $hasil = [];
    while($r1 = $result->fetch_assoc()){
        $hasil[] = array(
            'id' => $r1['id'],
            'judul' => $r1['judul'],
            'kategori' => $r1['kategori'],
            'deskripsi' => $r1['deskripsi'],
            'tanggal_input' => $r1['tanggal_input'],
            'gambar' => $r1['gambar']
        );
    }
    $stmt->close();

    $data['data']['result'] = $hasil;
    echo json_encode($data);
}

function update(){
    global $koneksi;
    $id = $_GET['id'] ?? 0;
    $judul = $_POST['judul'] ?? '';
    $kategori_id = $_POST['kategori_id'] ?? 0;
    $deskripsi = $_POST['deskripsi'] ?? '';
    $gambar = $_POST['gambar'] ?? '';

    $set = [];
    if($judul) $set[] = "judul=?";
    if($kategori_id) $set[] = "kategori_id=?";
    if($deskripsi) $set[] = "deskripsi=?";
    if($gambar) $set[] = "gambar=?";
    
    $hasil = "Gagal melakukan update data";
    if(!empty($set)){
        $sql1 = "UPDATE berita SET ".implode(", ", $set).", tanggal_input=NOW() WHERE id=?";
        $stmt = $koneksi->prepare($sql1);

        $params = array_merge(array_values(array_filter([$judul, $kategori_id, $deskripsi, $gambar])), [$id]);
        $types = str_repeat("s", count($params)-1) . "i";
        $stmt->bind_param($types, ...$params);

        if($stmt->execute()){
            $hasil = "Data berhasil diupdate";
        }
        $stmt->close();
    }
    $data['data']['result'] = $hasil;
    echo json_encode($data);
}

function delete(){
    global $koneksi;
    $id = $_GET['id'] ?? 0;

    $sql1 = "DELETE FROM berita WHERE id = ?";
    $stmt = $koneksi->prepare($sql1);
    $stmt->bind_param("i", $id);

    $hasil = "Gagal menghapus data";
    if($stmt->execute()){
        $hasil = "Berhasil menghapus data";
    }
    $stmt->close();

    $data['data']['result'] = $hasil;
    echo json_encode($data);
}

function tabel_kategori(){
    global $koneksi;
    $sql1 = "SELECT * FROM kategori";
    $q1 = mysqli_query($koneksi, $sql1);

    $hasil = [];
    while($r1 = mysqli_fetch_assoc($q1)){
        $hasil[] = array(
            'id' => $r1['id'],
            'kategori' => $r1['kategori'],
        );
    }
    $data['data']['result'] = $hasil;
    echo json_encode($data);
}

function tabel_trending(){
    global $koneksi;
    $sql1 = "SELECT * FROM trending";
    $q1 = mysqli_query($koneksi, $sql1);

    $hasil = [];
    while($r1 = mysqli_fetch_assoc($q1)){
        $hasil[] = array(
            'id' => $r1['id'],
            'trending' => $r1['trending'],
        );
    }
    $data['data']['result'] = $hasil;
    echo json_encode($data);
}

function create_trending(){
    global $koneksi;
    $trending = $_POST['trending'] ?? '';

    $hasil = "Gagal dimasukkan data";
    if ($trending) {
        $stmt = $koneksi->prepare("INSERT INTO trending (trending) VALUES (?)");
        if ($stmt === false) {
            $data['data']['result'] = "Gagal mempersiapkan statement: " . $koneksi->error;
            echo json_encode($data);
            return;
        }
        $stmt->bind_param("s", $trending);

        if ($stmt->execute()) {
            $hasil = "Berhasil menambahkan data";
        } else {
            $hasil = "Gagal mengeksekusi statement: " . $stmt->error;
        }
        $stmt->close();
    }

    $data['data']['result'] = $hasil;
    echo json_encode($data);
}

function detail_trending() {
    global $koneksi;
    $id = isset($_GET['id']) ? (int) $_GET['id'] : 0;

    $sql1 = "SELECT * FROM trending WHERE id = ?";
    $stmt = $koneksi->prepare($sql1);
    if ($stmt === false) {
        // Handle error
        echo json_encode(['error' => 'Failed to prepare statement']);
        return;
    }

    $stmt->bind_param("i", $id);
    $stmt->execute();
    $result = $stmt->get_result();

    $hasil = [];
    while ($r1 = $result->fetch_assoc()) {
        $hasil[] = array(
            'id' => $r1['id'],
            'trending' => $r1['trending'],
        );
    }
    $stmt->close();

    $data['data']['result'] = $hasil;
    echo json_encode($data);
}

function update_trending(){
    global $koneksi;
    $id = isset($_GET['id']) ? intval($_GET['id']) : 0;
    $trending = isset($_POST['trending']) ? trim($_POST['trending']) : '';

    $set = [];
    if(!empty($trending)) $set[] = "trending=?";

    $hasil = "Gagal melakukan update data";
    if(!empty($set) && $id > 0){
        $sql1 = "UPDATE trending SET ".implode(", ", $set)." WHERE id=?";
        $stmt = $koneksi->prepare($sql1);

        $params = array_merge(array_values(array_filter([$trending])), [$id]);
        $types = str_repeat("s", count($params)-1) . "i";
        $stmt->bind_param($types, ...$params);

        if($stmt->execute()){
            $hasil = "Data berhasil diupdate";
        }
        $stmt->close();
    }

    $data['data']['result'] = $hasil;
    echo json_encode($data);
}


function delete_trending(){
    global $koneksi;
    $id = isset($_GET['id']) ? intval($_GET['id']) : 0;

    $hasil = "Gagal menghapus data";
    if ($id > 0) {
        $sql1 = "DELETE FROM trending WHERE id = ?";
        $stmt = $koneksi->prepare($sql1);
        $stmt->bind_param("i", $id);

        if($stmt->execute()){
            $hasil = "Berhasil menghapus data";
        }
        $stmt->close();
    }

    $data['data']['result'] = $hasil;
    echo json_encode($data);
}

function registrasi() {
    global $koneksi;
    $nama = $_POST['nama'] ?? '';
    $email = $_POST['email'] ?? '';
    $password = $_POST['password'] ?? '';

    $hasil = "Gagal melakukan registrasi";

    if ($nama && $email && $password) {
        // Periksa apakah email sudah terdaftar
        $stmt = $koneksi->prepare("SELECT COUNT(*) FROM user WHERE email = ?");
        $stmt->bind_param("s", $email);
        $stmt->execute();
        $stmt->bind_result($jumlah);
        $stmt->fetch();
        $stmt->close();

        if ($jumlah > 0) {
            $hasil = "Email sudah terdaftar";
        } else {
            // Hash password sebelum disimpan
            $hashedPassword = password_hash($password, PASSWORD_DEFAULT);

            $stmt = $koneksi->prepare("INSERT INTO user (nama, email, password) VALUES (?, ?, ?)");
            if ($stmt === false) {
                $hasil = "Gagal mempersiapkan statement: " . $koneksi->error;
            } else {
                $stmt->bind_param("sss", $nama, $email, $hashedPassword);

                if ($stmt->execute()) {
                    $hasil = "Registrasi berhasil";
                } else {
                    $hasil = "Gagal mengeksekusi statement: " . $stmt->error;
                }
                $stmt->close();
            }
        }
    } else {
        $hasil = "Semua bidang harus diisi";
    }

    $data['data']['result'] = $hasil;
    echo json_encode($data);
}


function login() {
    global $koneksi;
    $email = $_POST['email'] ?? '';
    $password = $_POST['password'] ?? '';

    $hasil = "Gagal melakukan login";

    if ($email && $password) {
        // Cari pengguna berdasarkan email
        $stmt = $koneksi->prepare("SELECT id, password FROM user WHERE email = ?");
        $stmt->bind_param("s", $email);
        $stmt->execute();
        $stmt->store_result();

        if ($stmt->num_rows > 0) {
            $stmt->bind_result($id, $hashedPassword);
            $stmt->fetch();

            // Verifikasi password
            if (password_verify($password, $hashedPassword)) {
                $hasil = "Login berhasil";
                // Misalkan Anda ingin menyimpan ID pengguna ke dalam sesi
                session_start();
                $_SESSION['user_id'] = $id;
            } else {
                $hasil = "Password salah";
            }
        } else {
            $hasil = "Email tidak terdaftar";
        }
        $stmt->close();
    } else {
        $hasil = "Email dan password harus diisi";
    }

    $data['data']['result'] = $hasil;
    echo json_encode($data);
}



?>
