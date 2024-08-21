# -- 코드를 입력하세요
SELECT
    CONCAT('/home/grep/src/',files.board_id,"/", files.file_id,files.file_name,files.file_ext) as file_path
  FROM USED_GOODS_FILE files
 INNER JOIN (
     SELECT 
       boards.BOARD_ID
       FROM USED_GOODS_BOARD boards
      WHERE boards.VIEWS = (SELECT MAX(bb.VIEWS) FROM USED_GOODS_BOARD bb )
    ) b
    ON b.board_id = files.board_id
 ORDER BY files.FILE_ID DESC ;