<?php
$qualities = [
    "720p" => "video-720p.mp4",
    "480p" => "video-480p.mp4"
];

$subtitles = [
    "en" => "subtitles-en.vtt",
    "fr" => "subtitles-fr.vtt"
];

$audioTracks = [
    "en" => "audio-en.mp3",
    "fr" => "audio-fr.mp3"
];
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>PHP Video Player</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <div class="video-container">
        <video id="videoPlayer" controls>
            <?php foreach ($qualities as $label => $file): ?>
                <source src="<?php echo $file; ?>" type="video/mp4">
            <?php endforeach; ?>
            <?php foreach ($subtitles as $lang => $file): ?>
                <track src="<?php echo $file; ?>" kind="subtitles" srclang="<?php echo $lang; ?>" label="<?php echo ucfirst($lang); ?>">
            <?php endforeach; ?>
        </video>
        <div class="controls">
            <select id="qualitySelector">
                <?php foreach ($qualities as $label => $file): ?>
                    <option value="<?php echo $label; ?>" data-src="<?php echo $file; ?>"><?php echo $label; ?></option>
                <?php endforeach; ?>
            </select>
            <select id="audioSelector">
                <?php foreach ($audioTracks as $lang => $file): ?>
                    <option value="<?php echo $file; ?>"><?php echo ucfirst($lang); ?></option>
                <?php endforeach; ?>
            </select>
        </div>
    </div>
    <script src="script.js"></script>
</body>
</html>