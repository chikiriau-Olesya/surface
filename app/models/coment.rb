class Coment < ApplicationRecord
  belongs_to  :post
  belongs_to  :user
  belongs_to  :parent, class_name: 'Coment', optional: true
  has_many    :replies, class_name: 'Coment', foreign_key: :parent_id, dependent: :destroy

  validates :body, presence: :true
end
