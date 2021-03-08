json.extract! coment, :id, :commenter, :body, :post_id, :parent_id, :created_at, :updated_at
json.url coment_url(coment, format: :json)
